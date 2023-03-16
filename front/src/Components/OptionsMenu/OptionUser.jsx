import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

function OptionUser() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("rol");
    localStorage.removeItem("Token");
    localStorage.removeItem("idUser");
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
        <label className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-900 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-slate-50 pr-6">
          <span className="inline-flex justify-center items-center ml-4  text-white font-bold">
            <UserCircleIcon className="h-6 w-6 text-white" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate  text-white font-bold">
            Profile
          </span>
        </label>
      </li>
      <li>
        <label
          onClick={logOut}
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-900 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-slate-50 pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4  text-white font-bold">
            <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white" />
          </span>
          <span className="ml-2 text-sm tracking-wide truncate  text-white font-bold">
            Logout
          </span>
        </label>
      </li>
    </ul>
  );
}

export default OptionUser;
