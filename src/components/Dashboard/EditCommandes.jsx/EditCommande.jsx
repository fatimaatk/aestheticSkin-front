import React from "react";
import moment from "moment";
import { AiOutlineDownCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
const EditCommande = ({ order }) => {
  const [status, setStatus] = useState([]);

  const handleChangeStatus = () => {
    axios
      .put(`http://localhost:8000/cart/status/${order.id}`, {
        status_id: status,
      })
      .then(({ data }) => {
        if (data.error) console.log(data.error);
        else {
          console.log("infos mis à jour");
        }
      });
  };

  return (
    <tr>
      <td className="p-2  ">
        <div className="text-center font-medium">
          {moment(order.date).utc().format("DD-MM-YYYY")}
        </div>
      </td>
      <td className="p-2 w-24">
        <div className="text-left">{order.cart_id}</div>
      </td>
      <td className="p-2">
        <div className="text-left">{order.products}</div>
      </td>
      <td className="p-2">
        <div className="text-left">{order.total_price} €</div>
      </td>
      <td className="p-2">
        <div className="text-left">{order.adresse_livraison}</div>
      </td>
      <td className="p-2 ">
        <div className="text-left">{order.adresse_facturation}</div>
      </td>
      <td className="p-2 ">
        <div className="text-left font-medium">{order.status}</div>
      </td>
      <td className="p-2 ">
        <form onSubmit={handleChangeStatus}>
          <div className="text-center font-medium flex ">
            <select onChange={(e) => setStatus(e.target.value)}>
              <option className="text-center">Sélectionner</option>
              <option className="text-center" value="1">
                Validée
              </option>
              <option className="text-center" value="2">
                En cours de préparation
              </option>
              <option className="text-center" value="3">
                Livrée
              </option>
            </select>
            <button>
              <AiOutlineDownCircle className="text-xl" />
            </button>
          </div>
        </form>
      </td>
    </tr>
  );
};

export default EditCommande;
