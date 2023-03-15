import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import TeamCard from "../TeamCard/TeamCard";

function TeamList() {
  const createTeam = () => {
    Swal.fire({
      title: "Team name",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Add new team",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your team has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className=" flex overflow-hidden w-[100%] justify-center items-center rounded-lg mt-4">
      <table className="w-[90%] border-collapse bg-white text-left text-sm text-gray-500 rounded-t-lg">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Team Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900 text-center"
            ></th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>

            <th scope="col" className="  font-medium text-gray-900">
              <button
                onClick={createTeam}
                className="flex justify-center items-center mr-7 text-center w-full"
              >
                <span className="ml-2 text-sm tracking-wide truncate mr-1  text-black ">
                  Add new
                </span>
                <PlusCircleIcon className="h-6 w-6 text-green-500 text-center"></PlusCircleIcon>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <TeamCard />
        </tbody>
      </table>
    </div>
  );
}

export default TeamList;
