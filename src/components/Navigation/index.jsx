import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-evenly bg-brown h-16 w-3/4 mx-auto items-center h-8 rounded-md mt-3 shadow-md">
      <NavLink className="flex-initial text-2xl text-yellow font-bold" to="/">
        Home
      </NavLink>
      <NavLink
        className="flex-initial text-2xl text-yellow font-bold"
        to="/villagers"
      >
        Villagers
      </NavLink>
      <NavLink className="flex-initial text-2xl text-yellow font-bold" to="/">
        Fish & Bugs
      </NavLink>
    </nav>
  );
};

export default Navigation;
