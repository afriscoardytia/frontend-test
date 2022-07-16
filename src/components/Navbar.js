import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center bg-white border-b border-gray-200 py-4 sticky top-0 z-10">
      <div className="w-11/12 flex">
        <div className="w-full font-semibold">
          <NavLink to="/">mealapp</NavLink>
        </div>
        <div className="w-full text-sm justify-end items-center space-x-8 md:flex hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/foods"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
            }
          >
            Foods
          </NavLink>
          <NavLink
            to="/ingredients"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
            }
          >
            Ingredients
          </NavLink>
          <NavLink
            to="/local"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
            }
          >
            Local Culinary
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
