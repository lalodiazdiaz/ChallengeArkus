import {
    UserPlusIcon,
  } from "@heroicons/react/20/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import UserCard from "../UserCard/UserCard";

function UserList() {
  return (
    <div class=" flex overflow-hidden w-[100%] justify-center items-center rounded-lg mt-4">
      <table class="w-[90%] border-collapse bg-white text-left text-sm text-gray-500 rounded-t-lg">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Email
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Team
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            </th>
            <th scope="col" class="  font-medium text-gray-900 items-center">
              <NavLink
                to={"/home/users"}
                x-data="{ tooltip: 'Edite' }"
                className="flex justify-evenly items-center mr-7"
              >
                  <span className="ml-2 text-sm tracking-wide truncate  text-black ">
                  Add new
                </span>
                <UserPlusIcon className="h-6 w-6 text-center text-green-500 " />
              </NavLink>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          <UserCard/>
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
