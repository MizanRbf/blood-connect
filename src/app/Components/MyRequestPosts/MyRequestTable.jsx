import React from "react";
import { MdDeleteForever } from "react-icons/md";

const MyRequestTable = ({ request, index, handleDelete }) => {
  return (
    <tr className="border border-gray-200">
      <td className="text-center">{index + 1}</td>
      <td className="px-4 py-2">{request.name}</td>
      <td className="px-4 py-2">{request.blood_group}</td>
      <td className="px-4 py-2">{request.location}</td>
      <td className="">
        <button
          onClick={() => handleDelete(request._id)}
          className="px-2 py-2 bg-primary  rounded-sm text-white cursor-pointer"
        >
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default MyRequestTable;
