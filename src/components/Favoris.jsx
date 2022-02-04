import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "./../styles/favorisContainer.css";
import { AuthContext } from "../contexts/AuthContext";

import axios from "axios";

const Favoris = () => {
  const params = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);


  const [error, setError] = useState("");
  const [favoris, setFavoris] = useState([], () => {
    const result = localStorage.getItem("favorites");
    return result ?? JSON.parse(result);
  });



  console.log(user);

  useEffect(() => {
    getFavoris();
    localStorage.setItem("favorites", JSON.stringify(favoris));
  }, [favoris]);

  const getFavoris = async () => {
    await axios
      .get(`http://localhost:8000/favoris/${user.id}`)
      .then((response) => {
        setFavoris(response.data);
      });
  };
  const handleRemove = (id, e) => {
    e.preventDefault();

     axios
      .delete(`http://localhost:8000/favoris/${id}`)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setError("");

        }
      });

  };
  console.log(favoris);

  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5">
      <h1 className="mb-4">Mes favoris</h1>
      {isAuthenticated && user && (
      <div className="favorisContainer">
        {favoris
          ? favoris.map((fav, i) => (
              <div
                key={i}
                className="favoris flex items-center justify-center flex-col"
              >
                <img src={fav.image1} alt={fav.title} className="w-full" />
                <p>{fav.title} </p>
                <button
                  className="text-text py-1 px-4  w-60"
                  type="button"
                  onClick={() => handleRemove(fav.id)}
                >
                  {" "}
                  Retirer{" "}
                </button>
              </div>
            ))
          : "loading ..."}
      </div>
          )}
    </div>
  );
};

export default Favoris;
