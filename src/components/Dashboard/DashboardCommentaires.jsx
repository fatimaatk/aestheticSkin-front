import React, { useState, useEffect } from "react";
import axios from "axios";
import NavDashboard from "./NavDashboard";
import EditCommentaire from "./EditCommentaires.jsx/EditCommentaire";
import { ExportCSV } from "../Common/ExportExcel";
import Pagination from "../Common/Pagination";

const DashboardCommentaires = () => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios.get(`http://localhost:8000/comments`).then((response) => {
      setComments(response.data);
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    getComments();
  }, []);

  //change page
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const totalPage = [];

  for (let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
    totalPage.push(i);
  }

  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>

      <h1 className="mt-5 ml-20 text-xl text-center font-bold">
        Liste des commentaires
      </h1>

      <section className="antialiased  text-gray-600 p-4 w-full text-center">
        <div className="flex flex-col justify-center h-full">
          <div className="w-2/3  mx-auto bg-white shadow-lg rounded-sm">
            <div className="p-3 ">
              <div className="flex justify-between items-center">
                <ExportCSV csvData={comments} fileName="Commentaires" />
              </div>
              <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Nom du produit
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Commentaires
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Note</div>
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
                    {comments &&
                      currentComments.map((comment, i) => (
                        <EditCommentaire comment={comment} key={i} />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center mt-5">
                <div className="flex-1">
                  <Pagination
                    commentsPerPage={commentsPerPage}
                    totalComments={comments.length}
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
                  <p>Résultat : {comments.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardCommentaires;
