import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  }
  if (!values.userEmail) {
    errors.userEmail = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)
  ) {
    errors.userEmail = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

function Users() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      password: "",
      team: "",
      rol: "admin",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New user has been add",
        showConfirmButton: false,
        timer: 1500,
      });
      formik.resetForm();
    },
  });
  return (
    <div className=" flex bg-slate-600 h-full w-full justify-center items-center flex-col">
      <form onSubmit={formik.handleSubmit} className="w-3/4">
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col text-white">
            <label className="font-semibold leading-none text-white">
              Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="leading-none  text-gray-900 p-2.5  focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.userName ? (
              <div className="mt-2">{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4 text-white">
            <label className="font-semibold leading-none  text-white">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              onChange={formik.handleChange}
              value={formik.values.userEmail}
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.userEmail ? (
              <div className="mt-2">{formik.errors.userEmail}</div>
            ) : null}
          </div>
        </div>
        <div className="md:flex items-center mt-8 text-white">
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
            <label className="font-semibold leading-none flex items-center text-white">
              Team
              <abbr title="Optional field">
                <ExclamationCircleIcon className="h-4 w-6 text-white" />
              </abbr>
            </label>
            <input
              type="text"
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
        </div>

        <div className="w-full flex flex-col mt-8">
          <label className="font-semibold leading-none text-white">Rol</label>
          <select
            className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            value={formik.values.rol}
            onChange={formik.handleChange}
            id="rol"
            name="rol"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex items-center justify-end w-full">
          <button
            type="submit"
            className=" w-52 mt-9 font-semibold leading-none text-white p-2.5 bg-red-600 rounded hover:bg-red-800 "
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}

export default Users;
