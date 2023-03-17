import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { ROL } from "../../constants";
import { deleteUSer } from "../../Services/UserServices";

function UserCard(data) {
  console.log(data);
  const deleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: data.data._id,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUSer(data.data._id)
          .then((result) => {
            Swal.fire({
              position: "center",
              icon: "success",
              html: " <p>Account has been deleted.</p>",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {});
      }
    });
  };

  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="text-sm">
          <div className="font-medium text-gray-700">{data.data.name}</div>
        </div>
      </th>

      <td className="px-6 py-4">{data.data.email}</td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4">
        {data.data.range === ROL.super ? null : (
          <div className="flex justify-evenly gap-4">
            <button type="button" onClick={deleteUser}>
              <TrashIcon className="h-6 w-6 text-red-600" />
            </button>
            <NavLink
              to={"/homeAdmin/users"}
              x-data="{ tooltip: 'Edite' }"
              className="hidden"
            >
              <PencilSquareIcon className="h-6 w-6 text-blue-500" />
            </NavLink>
          </div>
        )}
      </td>
    </tr>
  );
}

export default UserCard;
