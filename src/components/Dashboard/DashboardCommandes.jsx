import React, { useState } from "react";
import NavDashboard from "./NavDashboard";
import { ExportCSV } from "../Common/ExportExcel";
import Pagination from "../Common/Pagination";
import axios from "axios";
import { useEffect } from "react";
import EditCommande from "./EditCommandes.jsx/EditCommande";

const DashboardCommandes = () => {
  const [orders, setOrders] = useState([]);

  const getOrder = () => {
    axios.get(`http://localhost:8000/cart`).then((response) => {
      setOrders(response.data);
    });
  };

  useEffect(() => {
    getOrder();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //change page
  const [currentPage, setCurrentPage] = useState(1);
  const [orderPerPage] = useState(10);

  const indexOfLastComment = currentPage * orderPerPage;
  const indexOfFirstComment = indexOfLastComment - orderPerPage;
  const currentCarts = orders.slice(indexOfFirstComment, indexOfLastComment);

  const totalPage = [];

  for (let i = 1; i <= Math.ceil(orders.length / orderPerPage); i++) {
    totalPage.push(i);
  }

  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <h1 className="mt-5 ml-20 text-xl text-center font-bold">Commandes</h1>
      <section className="antialiased  text-gray-600 p-4 w-full text-center">
        <div className="flex flex-col justify-center h-full">
          <div className="w-2/3  mx-auto bg-white shadow-lg rounded-sm">
            <div className="p-3 ">
              <div className="flex justify-between items-center">
                <ExportCSV csvData={orders} fileName="Commandes" />
              </div>
              <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Date</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Référence</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Produits</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Prix total
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Adresse de livraison
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Adresse de facturation
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Statut</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Editer</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {orders &&
                      currentCarts.map((order, i) => (
                        <EditCommande order={order} key={i} />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center mt-5">
                <div className="flex-1">
                  <Pagination
                    commentsPerPage={currentCarts}
                    totalComments={orders.length}
                    currentPage={currentPage}
                    paginate={paginate}
                    setCurrentPage={setCurrentPage}
                    totalPage={totalPage}
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <p>
                    Page : {currentPage} / {totalPage.length}
                  </p>
                  <p>Résultat : {orders.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardCommandes;
