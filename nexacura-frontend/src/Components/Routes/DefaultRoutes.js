/**
 * The DefaultRoutes function sets up routing for different pages in a React application using React
 * Router.
 * @returns The `DefaultRoutes` component is being returned. It sets up the routing for different pages
 * in the application using `react-router-dom`. It includes routes for Home, About, Contact, Login,
 * Register, Pricing, SelectPlan, VerifyingEmail, and VerifiedEmail pages, each associated with a
 * specific component. The `Nav` component is also included to provide navigation links.
 */
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

function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
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
