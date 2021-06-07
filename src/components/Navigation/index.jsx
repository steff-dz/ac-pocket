import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "../Search";

const Navigation = () => {
  //let location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  return (
    <nav className="flex justify-evenly w-full bg-brown h-16 items-center rounded-md shadow-md border">
      <div className="w-full flex justify-evenly">
        <NavLink className="flex-initial text-2xl text-yellow font-bold" to="/">
          Home
        </NavLink>
        <NavLink
          className="flex-initial text-2xl text-yellow font-bold"
          to="/villagers"
        >
          Villagers
        </NavLink>
        <NavLink
          className="flex-initial text-2xl text-yellow font-bold"
          to="/fishnbugs"
        >
          Fish & Bugs
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
