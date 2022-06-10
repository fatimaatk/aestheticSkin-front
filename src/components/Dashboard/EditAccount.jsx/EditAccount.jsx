import React, { useState } from "react";
import axios from "axios";
import { FaExchangeAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const EditAccount = ({ account }) => {
  const [setError] = useState("");

  const handleAdmin = async (element) => {
    const update = { is_admin: element };
    await axios
      .put(`http://localhost:8000/accounts/update/${account.id}`, update)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          window.location.reload();
        }
      });
  };
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:8000/accounts/delete/${account.id}`)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          window.location.reload();
        }
      });
  };
  return (
    <>
      <tr>
        <td className="p-2 ">
          <div className="text-left"> {account.email}</div>
        </td>
        <td className="p-2 ">
          <div className="text-left">{account.firstname}</div>
        </td>
        <td className="p-2 ">
          <div className="text-left">{account.lastname}</div>
        </td>
        <td className="p-2 ">
          <div className="text-left"></div>
        </td>

        <td className="p-2 ">
          <div className="text-left">
            {account.is_admin === 1 ? (
              <p className="text-green-600">Admin</p>
            ) : (
              <p className="text-red-600">Utilisateur</p>
            )}
          </div>
        </td>
        <td className="p-2 ">
          <div className="text-center">
            {account.is_admin === 0 ? (
              <FaExchangeAlt
                className="cursor-pointer"
                onClick={() => handleAdmin(1)}
              />
            ) : (
              <FaExchangeAlt
                className="cursor-pointer"
                onClick={() => handleAdmin(0)}
              />
            )}
          </div>
        </td>
        <td className="p-2 text-center">
          <AiOutlineDelete onClick={handleDelete} className="cursor-pointer" />
        </td>
      </tr>
    </>
  );
};

export default EditAccount;
