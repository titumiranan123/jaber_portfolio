import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Main: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
