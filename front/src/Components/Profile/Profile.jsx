import { FolderPlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getOneUser } from "../../Services/UserServices";

const idUser = localStorage.getItem("idUser");

function Profile() {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  const saveChange = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    getOneUser(idUser)
      .then((result) => {
        console.log(result.data);
        setUserData(result.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className=" flex bg-slate-600 h-full w-full justify-center items-center flex-col">
      {loading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-red-600 border-8 h-32 w-32"></div>
        </div>
      ) : (
        <div className="w-3/4">
          <div className="md:flex items-center mt-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-white">
                Name
              </label>
              <input
                type="text"
                readOnly
                value={userData.name}
                className="leading-none  text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="font-semibold leading-none  text-white">
                Email
              </label>
              <input
                type="email"
                readOnly
                className="leading-none text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
                value={userData.email}
              />
            </div>
          </div>
          <div className="md:flex items-center mt-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-white">
                English level
              </label>
              <input
                readOnly
                value={userData.englishLevel}
                type="text"
                className="leading-none text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="font-semibold leading-none  text-white">
                Resume link
              </label>
              <input
                readOnly
                type="url"
                value={userData.CV}
                className="leading-none text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
              />
            </div>
          </div>

          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none text-white">
                Technical knowledge
              </label>
              <textarea
                type="text"
                value={userData.techKnowledge}
                readOnly
                className="h-40 text-base leading-none text-gray-900 p-3  mt-4 bg-gray-100 border rounded border-gray-200 resize-none"
              ></textarea>
            </div>
          </div>

          <div className=" items-center justify-end w-full hidden">
            <button
              onClick={saveChange}
              className=" w-52 mt-9 font-semibold leading-none text-white p-2.5 bg-red-600 rounded hover:bg-red-800 flex justify-center text-center items-center"
            >
              <FolderPlusIcon className="h-5 w-6 text-white mr-2 " /> Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
