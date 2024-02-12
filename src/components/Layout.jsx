import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layout = () => {
  return (
    <>
      <div className="w-full h-screen bg-slate-50 justify-between items-center">
        <div>
          <div className={``}>
            <Navbar />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
