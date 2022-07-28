import { useContext } from "react";
import "./../styles/favorisContainer.css";
import FavorisContext from "../contexts/FavorisContext";
import { Link } from "react-router-dom";
import routine1 from "./../assets/routine1.jpeg";

const Favoris = () => {
  const { favorites, onRemoveFav } = useContext(FavorisContext);

  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5">
      <h1 className="text-xl">MES FAVORIS</h1>
      <hr />
      {favorites.length === 0 && (
        <div className="noFavoris flex justify-center items-center mt-5">
          <img src={routine1} alt="Marque" className="imgFav " />
          <div className="noFavorisButton flex flex-col items-end">
            <p className="noFavorisText ml-4">
              Vous n'avez pas de favoris.
              <br />
              Découvrez dès maintenant nos routines et faites vous livrer en
              France et en Europe
            </p>
            <Link to="/products">
              <button className="buttonFav mt-4 bg-black text-white py-2 px-4  inline-flex items-center ">
                Nos produits
              </button>
            </Link>
          </div>
        </div>
      )}

      {favorites && (
        <div className="favorisContainer mt-4">
          {favorites
            ? favorites.map((fav, i) => (
                <div
                  key={i}
                  className="favoris flex items-center justify-center flex-col"
                >
                  <Link to={`/products/${fav.id}`}>
                    <img src={fav.image1} alt={fav.title} className="w-full " />
                  </Link>
                  <p className="mt-2">{fav.title} </p>
                  <button
                    className="buttonFav mt-2 bg-black text-white py-2 px-4  inline-flex items-center "
                    type="button"
                    onClick={() => onRemoveFav(fav)}
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
