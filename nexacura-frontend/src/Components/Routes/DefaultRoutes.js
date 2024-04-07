import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/HomePage";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Pricing from "../../Pages/Pricing/Pricing";
import SelectPlan from "../../Pages/SelectPlan/SelectPlan";
import VerifyingEmail from "../../Pages/VerifyingEmail/VerifyingEmail";
import VerifiedEmail from "../../Pages/VerifiedEmail/VerifiedEmail";
import Nav from "../Nav/Nav";

/**
 * Defines the default routing structure for the application, associating paths
 * with their respective components. This setup includes the main navigation
 * and individual routes for pages like Home, About, Contact, etc. The `<Nav>` component
 * is used as a common element across various routes to ensure consistent navigation UI.
 */
function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          {/* Root path displaying the Home component */}
          <Route index element={<Home />} />
          {/* Individual routes for each page in the application */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/verifying-email" element={<VerifyingEmail />} />
          <Route path="/verified-email" element={<VerifiedEmail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default DefaultRoutes;
