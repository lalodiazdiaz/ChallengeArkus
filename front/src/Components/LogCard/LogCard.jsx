import React from "react";
import moment from "moment";
function LogCard(data) {
  const startDate = moment(data.data.startDate).utc().format("YYYY-MM-DD");
  const endDate = moment(data.data.endDate).utc().format("YYYY-MM-DD");
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="text-sm">
          <div className="font-medium text-gray-700">{data.data.user}</div>
        </div>
      </th>

      <td className="px-6 py-4">{data.data.team}</td>
      <td className="px-6 py-4"> {startDate}</td>
      <td className="px-6 py-4"> {endDate}</td>
      <td className="px-6 py-4"></td>
    </tr>
  );
}

export default LogCard;
