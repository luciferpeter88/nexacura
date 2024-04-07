import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PaymentOptions from "../../Pages/PaymentOptions/PaymentOptions";
import PaymentForm from "../../Pages/PaymentForm/PaymentForm";
import ReviewPayment from "../../Pages/ReviewPayment/ReviewPayment";
import PurchaseSuccessful from "../../Pages/PurchaseSuccessful/PurchaseSuccessful";
import Mysubscription from "../../Pages/MySubscription/Mysubscription";
import Nav from "../Nav/Nav";
import Help from "../../Pages/Help/Help";
import MyAccount from "../../Pages/MyAccount/MyAccount";
import NotFound from "../../Pages/NotFound/NotFound";

/**
 * Configures and renders the routing for the dashboard application using React Router.
 * This component sets up a centralized routing system where each route is associated
 * with a specific component to render. The `<Nav>` component is rendered across all routes
 * as a parent route to provide a consistent navigation experience.
 */
function DashboardRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          {/* The main dashboard page. */}
          <Route index element={<Dashboard />} />
          {/* Routes for subscription management, payment options, and payment processing. */}
          <Route path="/my-subscription" element={<Mysubscription />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/payment-form" element={<PaymentForm />} />
          <Route path="/review-payment" element={<ReviewPayment />} />
          <Route path="/purchase-successful" element={<PurchaseSuccessful />} />
          {/* Additional utility pages like Help and Account Management. */}
          <Route path="/help" element={<Help />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Route>
        {/* Fallback route for unmatched paths, displaying a Not Found page. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DashboardRoutes;
