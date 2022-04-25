import React, { useState, useEffect } from "react";
import axios from "axios";
import NavDashboard from "./NavDashboard";
import EditCommentaire from "./EditCommentaires.jsx/EditCommentaire";

const DashboardCommentaires = () => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios.get(`http://localhost:8000/comments`).then((response) => {
      setComments(response.data);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>

      <div class="max-w-2xl mx-auto">
        TOUS LES COMMENTAIRES
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nom du produit
            </th>
            <th scope="col" class="px-6 py-3">
              Commentaire
            </th>
            <th scope="col" class="px-6 py-3">
              Utilisateur
            </th>
            <th scope="col" class="px-6 py-3">
              Supprimer le commentaire
            </th>
          </tr>

          <tbody>
            {comments &&
              comments.map((comment, i) => (
                <EditCommentaire comment={comment} key={i} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardCommentaires;
