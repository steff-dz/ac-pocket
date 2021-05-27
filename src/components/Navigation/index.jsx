import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-evenly bg-brown h-16 items-center rounded-md shadow-md">
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
    </nav>
  );
};

export default Navigation;
