import React from 'react'

function LogCard() {
  return (
    <tr className="hover:bg-gray-50">
    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
      <div className="text-sm">
        <div className="font-medium text-gray-700">Steven Jobs</div>
      </div>
    </th>

    <td className="px-6 py-4">Team 1</td>
    <td className="px-6 py-4"> 06/03/2023</td>
    <td className="px-6 py-4"> 06/06/2023</td>
    <td className="px-6 py-4"></td>
   
  </tr>
  )
}

export default LogCard