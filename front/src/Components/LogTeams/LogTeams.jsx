import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import LogCard from "../LogCard/LogCard";

function LogTeams() {
  return (
    <div className=" flex overflow-hidden w-[100%] justify-center items-center rounded-lg mt-4">
      <table className="w-[90%] border-collapse bg-white text-left text-sm text-gray-500 rounded-t-lg">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              User
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Team
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Start date
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
             End date
            </th>
            <th
              scope="col"
              className="  font-medium text-gray-900 items-center"
            >
              <NavLink
                to={"/homeAdmin/addlogs"}
                x-data="{ tooltip: 'Edite' }"
                className="flex justify-evenly items-center mr-7"
              >
                <span className="ml-2 text-sm tracking-wide truncate  text-black ">
                  Add new
                </span>
                <PlusCircleIcon className="h-6 w-6 text-green-500 text-center" />
              </NavLink>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <LogCard />
        </tbody>
      </table>
    </div>
  );
}

export default LogTeams;
