import React, { useState, useEffect } from "react";
import NavDashboard from "./NavDashboard";
import axios from "axios";
import EditAccount from "./EditAccount.jsx/EditAccount";
import Pagination from "../Common/Pagination";
const DashboardAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountPerPage] = useState(10);

  const getAccounts = () => {
    axios.get(`http://localhost:8000/accounts`).then((response) => {
      setAccounts(response.data);
    });
  };

  useEffect(() => {
    getAccounts();
  }, []);

  //change page

  const indexOfLastComment = currentPage * accountPerPage;
  const indexOfFirstComment = indexOfLastComment - accountPerPage;
  const currentAccounts = accounts.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPage = [];

  for (let i = 1; i <= Math.ceil(accounts.length / accountPerPage); i++) {
    totalPage.push(i);
  }

  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <h1 className="mt-5 ml-20 text-xl text-center font-bold">
        Liste des comptes
      </h1>
      <section className="antialiased  text-gray-600 p-4 w-full text-center">
        <div className="flex flex-col justify-center h-full">
          <div className="w-2/3  mx-auto bg-white shadow-lg rounded-sm">
            <div className="p-3 ">
              <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Prénom</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Nom</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Nombre de commandes
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Admin</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Editer</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Supprimer le compte
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {accounts &&
                      currentAccounts.map((account, i) => (
                        <EditAccount account={account} key={i} />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center mt-5">
                <div className="flex-1">
                  <Pagination
                    itemPerPage={accountPerPage}
                    totalItem={accounts.length}
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
                  <p>Résultat : {accounts.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardAccount;
