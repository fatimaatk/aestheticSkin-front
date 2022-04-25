import React from "react";

const EditCommentaire = ({ comment }) => {
  return (
    <tr>
      <td className="px-6 py-4 ">{comment.title}</td>
      <td class="px-6 py-4">{comment.comment}</td>
      <td class="px-6 py-4">{comment.email}</td>
      <td class="px-6 py-4 text-right">Supprimer</td>
    </tr>
  );
};

export default EditCommentaire;
