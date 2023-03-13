import {
  ArrowRightOnRectangleIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function OptionsAdmin() {
  const navigate = useNavigate();

  const logOut = () => {
    // Cookies.remove('rol')
    localStorage.removeItem("rol");
    navigate("../", { replace: true });
    console.log("clean");
  };

  return (
    <ul className="flex flex-col py-4 space-y-1">
      <li className="px-5">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm tracking-wide text-white font-bold">Menu</div>
        </div>
      </li>
      <li>
        <NavLink
          to={"/homeAdmin"}
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-900 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-slate-50 pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4  text-white font-bold">
            <BuildingOffice2Icon className="h-6 w-6 text-white " color="red" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate  text-white font-bold">
            Accounts
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/homeAdmin/userslist"}
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-900 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-slate-50 pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4  text-white font-bold">
            <UsersIcon className="h-6 w-6 text-white" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate  text-white font-bold">
            Users
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/homeAdmin/teamlist"}
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-900 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-slate-50 pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4  text-white font-bold">
            <UserGroupIcon className="h-6 w-6 text-white" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate  text-white font-bold">
            Teams
          </span>
        </NavLink>
      </li>
      <li>
        <label
          onClick={logOut}
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-900 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-slate-50 pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4  text-white font-bold">
            <ArrowRightOnRectangleIcon className="h-6 w-6 text-white" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate  text-white font-bold">
            Logout
          </span>
        </label>
      </li>
    </ul>
  );
}

export default OptionsAdmin;
