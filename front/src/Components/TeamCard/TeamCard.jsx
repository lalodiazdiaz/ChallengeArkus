import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import Swal from "sweetalert2";
import { deleteTeam } from "../../Services/TeamsService";

function TeamCard({ data, onAction }) {
  const deleteT = () => {
    Swal.fire({
      title: "Are you sure?",
      text: data._id,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTeam(data._id)
          .then((result) => {
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
          <div className="font-medium text-gray-700">{data.teamName}</div>
        </div>
      </th>

      <td className="px-6 py-4 text-center"></td>
      <td className="px-6 py-4">
        <div className="flex gap-2"></div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-evenly gap-4">
          <button type="button" onClick={deleteT}>
            <TrashIcon className="h-6 w-6 text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TeamCard;
