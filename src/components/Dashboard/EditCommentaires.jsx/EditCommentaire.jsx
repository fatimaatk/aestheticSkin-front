import React from "react";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

const EditCommentaire = ({ comment }) => {
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10  flex-shrink-0 mr-2 sm:mr-3">
            <img src={comment.image1} width="40" height="40" alt="" />
          </div>
          <div className="font-medium text-gray-800 ">{comment.title}</div>
        </div>
      </td>
      <td className="p-2 ">
        <div className="text-left">{comment.comment}</div>
      </td>
      <td className="p-2 ">
        <div className="text-left font-medium">{comment.email}</div>
      </td>
      <td className="p-2 ">
        <div className="text-center font-medium">{comment.rate_id}/5</div>
      </td>
      <td className="p-2 ">
        <div className="text-center">
          {comment.isVisible === 1 ? <p>En ligne</p> : <p>Hors ligne</p>}
        </div>
      </td>
      <td className="p-2 ">
        <div className="flex justify-center">
          {comment.isVisible === 1 ? (
            <BiArchiveIn className="text-red-600" />
          ) : (
            <BiArchiveOut className="text-green-600" />
          )}
        </div>
      </td>
    </tr>
  );
};

export default EditCommentaire;
