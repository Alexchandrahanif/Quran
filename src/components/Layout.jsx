import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layout = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div>
          <div className="w-full  bg-white sticky top-0 z-10 ">
            <Navbar />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
