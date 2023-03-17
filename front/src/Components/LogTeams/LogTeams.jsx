import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getMoves } from "../../Services/LogTeam";
import LogCard from "../LogCard/LogCard";

function LogTeams() {
  const [moves, setMoves] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoves()
      .then((result) => {
        setMoves(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" flex overflow-hidden w-[100%] justify-center items-center rounded-lg mt-4">
      {loading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-red-600 border-8 h-32 w-32"></div>
        </div>
      ) : (
        <table className="w-[90%] border-collapse bg-white text-left text-sm text-gray-500 rounded-t-lg">
          <thead className="bg-gray-300">
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
            {moves.map((move, i) => (
              <LogCard key={i} data={move} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LogTeams;
