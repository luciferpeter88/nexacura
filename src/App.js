import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/HomePage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Pricing from "./Pages/Pricing/Pricing";
import Nav from "./Components/Nav/Nav";
import VerifyingEmail from "./Pages/VerifyingEmail/VerifyingEmail";
import VerifiedEmail from "./Pages/VerifiedEmail/VerifiedEmail";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import PaymentOptions from "./Pages/PaymentOptions/PaymentOptions";
import PaymentForm from "./Pages/PaymentForm/PaymentForm";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/verifying-email" element={<VerifyingEmail />} />
            <Route path="/verified-email" element={<VerifiedEmail />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/payment-options" element={<PaymentOptions />} />
            <Route path="/payment-form" element={<PaymentForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
