import React from "react";
import DefaultRoutes from "./Components/Routes/DefaultRoutes";
import DashboardRoutes from "./Components/Routes/DashboardRoutes";
import authenticationContext from "./context/authenticationContext";

function App() {
  const {
    initial: { isAuthenticated },
  } = React.useContext(authenticationContext);

  return (
    <React.Fragment>
      {isAuthenticated ? <DashboardRoutes /> : <DefaultRoutes />}
    </React.Fragment>
  );
}

export default App;
