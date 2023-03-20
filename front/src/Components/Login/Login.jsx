import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { ROL } from "../../constants";
import login from "../../Services/LoginService";

const validate = (values) => {
  const errors = {};
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

function Login() {
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values.email, values.password)
        .then((result) => {
          if (result.isValid) {
            localStorage.setItem("rol", result.data.range);
            localStorage.setItem("Token", result.data.token);
            localStorage.setItem("idUser", result.data.idUser);
            if (result.data.range === ROL.user) {
              localStorage.setItem("idUser", result.data.idUser);
            }
            Swal.fire({
              position: "center",
              icon: "success",
              html: " <p>Welcome!</p>",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              if (localStorage.getItem("rol") === ROL.user) {
                navigation("/homeUser");
              } else {
                navigation("/homeAdmin");
              }
            }, 1500);
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            showConfirmButton: false,
            title: "Oops...",
            text: "Something went wrong!",
            footer: err.response.data.message,
            timer: 2000,
          });
        });
    },
  });

  return (
    <div className="relative flex h-full w-full">
      <div className="h-screen w-1/2 bg-slate-600">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div className="flex">
            <div>
              <p className="text-2xl">Login</p>
              <p>please login to continue |</p>
            </div>
            <img
              className="h-20 text-center ml-3"
              src="https://uploads-ssl.webflow.com/5e589a8b7bb9af87ad968338/613f82a2bceafc58516997ab_ArkusNexus_iso.png"
              alt="mind"
            />
          </div>
          <div className="mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="mb-2.5 block font-extrabold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="inline-block w-full rounded bg-white p-2 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                  placeholder="mail@user.com"
                />
                {formik.errors.email ? (
                  <div className="mt-2">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="inline-block w-full  rounded  leading-none text-white placeholder-indigo-900 mt-4 ">
                <label className="font-semibold leading-none  text-white">
                  Password
                </label>
                <div className="flex flex-row leading-none text-gray-900 justify-center items-center mt-4">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="inline-block h-10 w-full rounded-l bg-white p-2 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border-r-0"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                {formik.errors.password ? (
                  <div className="mt-2">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="my-10">
                <button
                  type="submit"
                  className="w-full rounded bg-red-600 p-2.5 hover:bg-red-800 flex text-center justify-center"
                >
                  <ArrowRightOnRectangleIcon className="h-6 w-6 text-white mr-2" />
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-blue-600">
        <img
          src="https://devsteam.io/images/dteam.jpg"
          className="h-full w-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
