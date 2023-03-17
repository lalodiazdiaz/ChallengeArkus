import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import { createUser } from "../../Services/UserServices";
import { ROL } from "../../constants";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

function Users() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      range: "",
      englishLevel: "",
      techKnowledge: "",
      CV: "",
    },
    validate,
    onSubmit: (values) => {
      createUser({ data: values })
        .then((result) => {
          console.log(result);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New user has been add",
            showConfirmButton: false,
            timer: 1500,
          });
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

      formik.resetForm();
    },
  });
  return (
    <div className=" flex bg-slate-600 h-full w-full justify-center items-center flex-col">
      <form onSubmit={formik.handleSubmit} className="w-3/4">
        <div className="md:flex items-center mt-6">
          <div className="w-full md:w-1/2 flex flex-col text-white">
            <label className="font-semibold leading-none text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="leading-none  text-gray-900 p-2.5  focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.name ? (
              <div className="mt-2">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4 text-white">
            <label className="font-semibold leading-none  text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.email ? (
              <div className="mt-2">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="md:flex items-center mt-6 text-white">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="leading-none  text-gray-900 p-2.5  focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.password ? (
              <div className="mt-2">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none text-white">Rol</label>
            <select
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
              value={formik.values.range}
              onChange={formik.handleChange}
              id="range"
              name="range"
            >
              {localStorage.getItem("rol") === ROL.super ? (
                <>
                  <option value="">--Please choose an user--</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </>
              ) : (
                <>
                  <option selected value="user">
                    User
                  </option>
                </>
              )}
            </select>
          </div>
        </div>
        <div className="md:flex items-center mt-6">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none text-white">
              English level
            </label>
            <input
              id="englishLevel"
              name="englishLevel"
              type="text"
              className="leading-none text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
              onChange={formik.handleChange}
              value={formik.values.englishLevel}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none  text-white">
              Resume link
            </label>
            <input
              id="CV"
              name="CV"
              onChange={formik.handleChange}
              value={formik.values.CV}
              type="url"
              className="leading-none text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
        </div>

        <div>
          <div className="w-full flex flex-col mt-6">
            <label className="font-semibold leading-none text-white">
              Technical knowledge
            </label>
            <textarea
              id="techKnowledge"
              name="techKnowledge"
              onChange={formik.handleChange}
              value={formik.values.techKnowledge}
              type="text"
              className="h-20 text-base leading-none text-gray-900 p-3  mt-4 bg-gray-100 border rounded border-gray-200 resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          <button
            type="submit"
            className=" w-52 mt-9 font-semibold leading-none text-white p-2.5 bg-red-600 rounded hover:bg-red-800 flex justify-center text-center items-center"
          >
            <FolderPlusIcon className="h-5 w-6 text-white mr-2 " /> Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Users;
