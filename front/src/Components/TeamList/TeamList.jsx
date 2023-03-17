import React, { useEffect, useState } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import TeamCard from "../TeamCard/TeamCard";
import { createTeam, getAllTeams } from "../../Services/TeamsService";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.teamName) {
    errors.teamName = "Required";
  }
  return errors;
};

function TeamList() {
  const [teams, setTeams] = useState();
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      teamName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      createTeam(values)
        .then((result) => {
          if (result.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              html: " <p>New teams has been added.</p>",
              showConfirmButton: false,
              timer: 1500,
            });
            updateList();
            loading(true);
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            showConfirmButton: false,
            title: "Oops...",
            text: "Something went wrong!",
            footer: err.response.data,
            timer: 1500,
          });
        });
    },
  });

  const updateList = () => {
    getAllTeams()
      .then((result) => {
        setTeams(result.data);
        setLoading(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getAllTeams()
      .then((result) => {
        setTeams(result.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className=" flex overflow-hidden w-[100%] justify-center items-center rounded-lg  flex-col">
      <form className="w-[90%] mb-4 " onSubmit={formik.handleSubmit}>
        <div className="flex justify-between w-full  mt-2">
          <div className="w-[85%] flex flex-col mt-2">
            <label className="font-semibold leading-none text-white">
              Add new team
            </label>
            <input
              id="teamName"
              name="teamName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.teamName}
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center self-end mi-7 text-center w-[12%] bg-red-600 hover:bg-red-800 h-11 rounded"
          >
            <FolderPlusIcon className="h-6 w-6 text-white text-center "></FolderPlusIcon>
            <span className="ml-2 text-sm tracking-wide truncate mr-1  text-white  font-bold">
              Save
            </span>
          </button>
        </div>
        {formik.errors.teamName ? (
          <div className="text-white">{formik.errors.teamName}</div>
        ) : null}
      </form>
      {loading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-red-600 border-8 h-32 w-32"></div>
        </div>
      ) : (
        <table className="w-[90%] border-collapse bg-white text-left text-sm text-gray-500 rounded-t-lg">
          <thead className="bg-gray-300">
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

              <th scope="col" className="  font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {teams.map((team, i) => (
              <TeamCard key={i} data={team} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TeamList;
