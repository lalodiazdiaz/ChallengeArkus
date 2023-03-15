import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import { createMove } from "../../Services/LogTeam";

const validate = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = "Required";
  }
  if (!values.team) {
    errors.team = "Required";
  }
  if (!values.startDate) {
    errors.startDate = "Required";
  }
  if (!values.endDate) {
    errors.endDate = "Required";
  }
  return errors;
};

function CrudLog() {
  const currentDate = new Date().toJSON().slice(0, 10);
  const formik = useFormik({
    initialValues: {
      user: "",
      team: "",
      startDate: "",
      endDate: "",
    },
    validate,
    onSubmit: (values) => {
      createMove(values)
        .then((result) => {
          console.log(result);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New move registered",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {});

      formik.resetForm();
    },
  });
  return (
    <div className=" flex bg-slate-600 h-full w-full justify-center items-center flex-col">
      <form onSubmit={formik.handleSubmit} className="w-3/4">
        <div className="w-full flex flex-col mt-8 text-white">
          <label className="font-semibold leading-none text-white">User</label>
          <select
            className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            value={formik.values.user}
            onChange={formik.handleChange}
            id="user"
            name="user"
          >
            <option value="">--Please choose an user--</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {formik.errors.user ? (
            <div className="mt-2">{formik.errors.user}</div>
          ) : null}
        </div>
        <div className="w-full flex flex-col mt-8 text-white">
          <label className="font-semibold leading-none text-white">Team</label>
          <select
            className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            value={formik.values.team}
            onChange={formik.handleChange}
            id="team"
            name="team"
          >
            <option value="">--Please choose a team--</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {formik.errors.team ? (
            <div className="mt-2">{formik.errors.team}</div>
          ) : null}
        </div>
        <div className="md:flex items-center mt-6 text-white">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none text-white">
              Start date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              min={currentDate}
              onChange={formik.handleChange}
              value={formik.values.startDate}
              className="leading-none  text-gray-900 p-2.5  focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.startDate ? (
              <div className="mt-2">{formik.errors.startDate}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none text-white">
              End date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              min={formik.values.startDate}
              onChange={formik.handleChange}
              value={formik.values.endDate}
              className="leading-none  text-gray-900 p-2.5  focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.endDate ? (
              <div className="mt-2">{formik.errors.endDate}</div>
            ) : null}
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
          <button className=" w-52 mt-9 font-semibold leading-none text-white p-2.5 bg-red-600 rounded hover:bg-red-800 flex justify-center text-center items-center">
            <FolderPlusIcon className="h-5 w-6 text-white mr-2 " /> Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudLog;
