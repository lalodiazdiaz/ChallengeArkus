import React from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { FolderPlusIcon } from "@heroicons/react/24/outline";

const validate = (values) => {
  const errors = {};
  if (!values.accountName) {
    errors.accountName = "Required";
  }
  if (!values.clientName) {
    errors.clientName = "Required";
  }
  if (!values.operationsManager) {
    errors.operationsManager = "Required";
  }

  return errors;
};

function Account() {
  const formik = useFormik({
    initialValues: {
      accountName: "",
      clientName: "",
      operationsManager: "",
    },
    validate,
    onSubmit: (values) => {
      Swal.fire({
        position: "center",
        icon: "success",
        html: " <p>New account has been added.</p>",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  return (
    <div className=" flex bg-slate-600 h-full w-full justify-center items-center flex-col">
      <form className="w-3/4" onSubmit={formik.handleSubmit}>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none text-white">
              Account name
            </label>
            <input
              id="accountName"
              name="accountName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.accountName}
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.accountName ? (
              <div className="text-white">{formik.errors.accountName}</div>
            ) : null}
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none text-white">
              Client name
            </label>
            <input
              id="clientAccount"
              name="clientName"
              onChange={formik.handleChange}
              value={formik.values.clientName}
              type="text"
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.clientName ? (
              <div className="text-white">{formik.errors.clientName}</div>
            ) : null}
          </div>
        </div>

        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none text-white">
              Operations manager
            </label>
            <input
              id="operationsManager"
              name="operationsManager"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.operationsManager}
              className="leading-none text-gray-900 p-2.5 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
            {formik.errors.operationsManager ? (
              <div className="text-white">
                {formik.errors.operationsManager}
              </div>
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

export default Account;
