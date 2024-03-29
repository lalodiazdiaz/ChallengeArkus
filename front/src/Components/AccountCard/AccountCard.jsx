import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteA } from "../../Services/AccountService";
function AccountCard({ data, onAction }) {
  const deleteAc = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteA(data._id)
          .then((result) => {
            console.log(result);
            Swal.fire({
              position: "center",
              icon: "success",
              html: " <p>Account has been deleted.</p>",
              showConfirmButton: false,
              timer: 1500,
            });
            onAction();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="text-sm">
          <div className="font-medium text-gray-700">{data.accountName}</div>
        </div>
      </th>

      <td className="px-6 py-4"> {data.client}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center  rounded-full px-2 py-1 ">
            {data.operationManager}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-evenly gap-4">
          <button type="button" onClick={deleteAc}>
            <TrashIcon className="h-6 w-6 text-red-600" />
          </button>
          <NavLink
            to={"/homeAdmin/accounts"}
            x-data="{ tooltip: 'Edite' }"
            className="hidden"
          >
            <PencilSquareIcon className="h-6 w-6 text-blue-500" />
          </NavLink>
        </div>
      </td>
    </tr>
  );
}

export default AccountCard;
