import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const MyOrders = ({ user }) => {
  const [orders, setOrders] = useState([]);

  const getMyOrder = () => {
    axios
      .get(`http://localhost:8000/cart/cart-user/${user.id}`)
      .then((response) => {
        setOrders(response.data);
      });
  };

  useEffect(() => {
    getMyOrder();
  }, []);

  const statusConvert = (id) => {
    switch (id) {
      case 1:
        return <p>Validée</p>;
      case 2:
        return <p>En prépation</p>;
      case 3:
        return <p>Livrée</p>;

      default:
    }
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400">
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Numéro de commande</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">
              Date de passage de commande
            </div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Montant</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Statut</div>
          </th>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td className="p-2 ">
                <div className="text-left"> Commande {order.id}</div>
              </td>
              <td className="p-2 ">
                <div className="text-left">
                  {" "}
                  {moment(order.date).utc().format("DD-MM-YYYY")}
                </div>
              </td>
              <td className="p-2 ">
                <div className="text-left">{order.total_price} €</div>
              </td>
              <td className="p-2 ">
                <div className="text-left">
                  {statusConvert(order.status_id)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length === 0 && <p>Vous n'avez pas de commandes</p>}
    </div>
  );
};

export default MyOrders;
