import React from "react";
import Swal from "sweetalert2";

function Profile() {

  const saveChange =()=>{
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  
  return (
    <div className=" flex bg-slate-600 h-full w-full justify-center items-center flex-col">
      <form className="w-3/4">
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none text-white">
              Name
            </label>
            <input
              type="text"
              readOnly
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
            />
          </div>
        </div>
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none text-white">
              English level
            </label>
            <input
              type="text"
              className="leading-none text-gray-900 p-2.5  mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none  text-white">
              Resume link
            </label>
            <input
              type="url"
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
              className="h-40 text-base leading-none text-gray-900 p-3  mt-4 bg-gray-100 border rounded border-gray-200 resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          <button onClick={saveChange} className=" w-52 mt-9 font-semibold leading-none text-white p-2.5 bg-red-600 rounded hover:bg-red-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
