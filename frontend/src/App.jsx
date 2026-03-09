import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";
import KnowledgeRoutes from "./routes/KnowledgeRoutes";
import Products from "./products/Products";
import Services from "./services/Services";
import AppPage from "./app/AppPage";
import CommunityPage from "./community/CommunityPage";
import ContactUs from "./pages/ContactUs";
import AuthPage from "./auth/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth page — outside Layout (no navbar/footer) */}
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<Layout />}>
          {/* Home/Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Products Page */}
          <Route path="/products" element={<Products />} />

          {/* Services Page */}
          <Route path="/services" element={<Services />} />

          {/* App Page */}
          <Route path="/app" element={<AppPage />} />

          {/* Community Page */}
          <Route path="/community" element={<CommunityPage />} />

          {/* Contact Us Page */}
          <Route path="/contact" element={<ContactUs />} />

          {/* Knowledge Main Page */}
          <Route path="/knowledge" element={<Knowledge />} />

          {/* Knowledge Sub-routes */}
          <Route path="/knowledge/*" element={<KnowledgeRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;