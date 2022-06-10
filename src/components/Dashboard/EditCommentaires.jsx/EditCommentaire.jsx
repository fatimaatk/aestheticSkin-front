import React, { useState } from "react";
import axios from "axios";
import { FaExchangeAlt } from "react-icons/fa";

const EditCommentaire = ({ comment }) => {
  const [setError] = useState("");

  const handleSubmit = async (element) => {
    const update = { isVisible: element };
    await axios
      .put(`http://localhost:8000/comments/update/${comment.id}`, update)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          window.location.reload();
        }
      });
  };
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
          {comment.isVisible === 0 ? (
            <p className="text-green-600">En ligne</p>
          ) : (
            <p className="text-red-600">Hors ligne</p>
          )}
        </div>
      </td>
      <td className="p-2 ">
        <div className="flex justify-center">
          {comment.isVisible === 0 ? (
            <FaExchangeAlt
              className="cursor-pointer"
              onClick={() => handleSubmit(1)}
            />
          ) : (
            <FaExchangeAlt
              className="cursor-pointer"
              onClick={() => handleSubmit(0)}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default EditCommentaire;
