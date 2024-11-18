import React from "react";
import { Outlet ,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();

  // Hide navbar and footer for these routes
  const hideNavbarFooter = [
    "/login",
    "/register",
 
  ].includes(location.pathname);

  return (
    <div>
      <div>{!hideNavbarFooter && <Navbar />}</div>
      <div>
        <Outlet />
      </div>
      <div>{!hideNavbarFooter && <Footer />}</div>
    </div>
  );
};

export default Layout;
