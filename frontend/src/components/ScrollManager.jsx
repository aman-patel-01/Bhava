import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Saves scroll positions per location and restores them on back/forward (POP)
// Designed to run before paint to avoid flicker.
export default function ScrollManager() {
  const positions = useRef(new Map());
  const location = useLocation();
  const navigationType = useNavigationType();

  // Capture pointerdown/clicks on potential navigation targets and save
  // current scroll position and anchor info. Use pointerdown to capture
  // intent even when navigation is performed via JS (not <a href>). Use
  // capture phase so we record before handlers run.
  useEffect(() => {
    const save = (info) => {
      const key = location.key || location.pathname;
      positions.current.set(key, info || { scrollY: window.scrollY });
    };

    const captureAnchorInfo = (target) => {
      const anchorEl = target && target.closest ? target.closest("[data-scroll-id]") : null;
      if (anchorEl) {
        const rect = anchorEl.getBoundingClientRect();
        // find nearest scroll container (if any) and save its scrollLeft
        const container = anchorEl.closest && anchorEl.closest("[data-scroll-container-id]");
        const containerSelector = container ? `[data-scroll-container-id=\"${container.getAttribute("data-scroll-container-id")}\"]` : undefined;
        const containerScrollLeft = container ? container.scrollLeft : undefined;

        return {
          scrollY: window.scrollY,
          anchorSelector: `[data-scroll-id=\"${anchorEl.getAttribute("data-scroll-id")}\"]`,
          anchorDocTop: rect.top + window.scrollY,
          anchorOffsetFromViewportTop: rect.top,
          containerSelector,
          containerScrollLeft,
        };
      }
      return { scrollY: window.scrollY };
    };

    const onPointerDown = (e) => {
      // Save immediately on pointerdown so we have the anchor before navigation
      const info = captureAnchorInfo(e.target);
      save(info);
    };

    const onClick = (e) => {
      // Also handle clicks on <a href> to limit false positives for other clicks
      const a = e.target.closest && e.target.closest("a");
      if (a) {
        const href = a.getAttribute("href");
        if (href) {
          const isInternal = href.startsWith("/") || a.origin === window.location.origin;
          if (isInternal) {
            const info = captureAnchorInfo(e.target);
            save(info);
          }
        }
      }
    };

    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("click", onClick, true);
    window.addEventListener("beforeunload", () => save());
    return () => {
      window.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("beforeunload", () => save());
    };
  }, [location]);

  // Restore on POP (back/forward). Use layout effect to avoid paint flicker.
  useLayoutEffect(() => {
    if (navigationType === "POP") {
      const key = location.key || location.pathname;
      const info = positions.current.get(key);
      if (!info) return;

      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto"; // prevent smooth scrolling

      // If we saved an anchor selector, try to align that element to the same
      // viewport offset it had before navigation.
      if (info.anchorSelector) {
        try {
          // If the clicked element belonged to a horizontal scroll container,
          // restore that container's scrollLeft first so the anchor is positioned
          // correctly when we compute its document position.
          if (info.containerSelector && typeof info.containerScrollLeft === "number") {
            const container = document.querySelector(info.containerSelector);
            if (container) {
              container.scrollLeft = info.containerScrollLeft;
              // Reinforce container scroll for a few frames
              let ctries = 0;
              const cenforce = () => {
                ctries += 1;
                container.scrollLeft = info.containerScrollLeft;
                if (ctries < 4) requestAnimationFrame(cenforce);
              };
              requestAnimationFrame(cenforce);
            }
          }

          const anchor = document.querySelector(info.anchorSelector);
          if (anchor) {
            const rect = anchor.getBoundingClientRect();
            const currentDocTop = rect.top + window.scrollY;
            const desiredY = Math.max(0, Math.round(currentDocTop - (info.anchorOffsetFromViewportTop || 0)));
            window.scrollTo(0, desiredY);
            // Reinforce the restored position for a couple frames in case
            // other listeners (router scroll restoration) override it.
            let tries = 0;
            const enforce = () => {
              tries += 1;
              window.scrollTo(0, desiredY);
              if (tries < 4) requestAnimationFrame(enforce);
            };
            requestAnimationFrame(enforce);
            html.style.scrollBehavior = prev || "";
            return;
          }
        } catch (err) {
          // fallthrough to scrollY
        }
      }

      // Fallback to stored scrollY
      if (typeof info.scrollY === "number") {
        window.scrollTo(0, info.scrollY);
        let tries = 0;
        const enforce = () => {
          tries += 1;
          window.scrollTo(0, info.scrollY);
          if (tries < 4) requestAnimationFrame(enforce);
        };
        requestAnimationFrame(enforce);
      }

      html.style.scrollBehavior = prev || "";
    }
    // On PUSH navigation (normal link navigation), ensure the new page starts
    // at the top unless the navigation explicitly provided a state asking to
    // scroll to a specific id (e.g., Footer links). This prevents landing in
    // the footer when opening a new page.
    if (navigationType === "PUSH") {
      try {
        const wantsScrollToId = location && location.state && location.state.scrollToId;
        if (!wantsScrollToId) {
          const html = document.documentElement;
          const prev = html.style.scrollBehavior;
          html.style.scrollBehavior = "auto";
          window.scrollTo(0, 0);
          let tries = 0;
          const enforce = () => {
            tries += 1;
            window.scrollTo(0, 0);
            if (tries < 3) requestAnimationFrame(enforce);
          };
          requestAnimationFrame(enforce);
          html.style.scrollBehavior = prev || "";
        }
      } catch (err) {
        // ignore
      }
    }
  }, [location, navigationType]);

  return null;
}
