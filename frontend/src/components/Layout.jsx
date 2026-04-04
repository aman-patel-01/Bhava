import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTopOnPush() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "PUSH") return;
    // If navigation requested a specific scroll target, don't force-top
    if (location && location.state && location.state.scrollToId) return;

    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const doScrollTop = () => {
      window.scrollTo(0, 0);
    };
    doScrollTop();

    // Reinforce across a few frames
    let tries = 0;
    const enforce = () => {
      tries += 1;
      window.scrollTo(0, 0);
      if (tries < 6) requestAnimationFrame(enforce);
    };
    requestAnimationFrame(enforce);

    // In case images or other resources load later and push layout, re-apply on load
    const onLoad = () => window.scrollTo(0, 0);
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      html.style.scrollBehavior = prev || "";
    };
  }, [location.key, navigationType, location.state]);

  return null;
}
const betaStyle = {
  position: "fixed",
  top: "28px",
  left: "20px",
  zIndex: 9999,
  background: "#4A0B1D",
  border: "1.5px solid #1B3A2D",
  borderRadius: "10px",
  padding: "5px 14px",
  fontFamily: "Inter, 'Work Sans', sans-serif",
  fontSize: "12px",
  fontWeight: "700",
  color: "#F4EFE6",
  letterSpacing: "3px",
  lineHeight: "1",
  pointerEvents: "none",
};
 

function Layout() {
  return (
    <>
      <div style={betaStyle}>BETA</div>
      <Navbar />
      <ScrollToTopOnPush />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;