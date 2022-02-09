import "./../styles/productcard.css";
import { useContext } from "react";
import PanierContext from "../contexts/PanierContext";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import FavorisContext from "../contexts/FavorisContext";

const ProductCard = ({ product }) => {
  const { onAdd } = useContext(PanierContext);
  const {
    favorites,
    handleFavoris
  } = useContext(FavorisContext);


  return (
    <div className="productCard w-60 mb-4">
      <Link to={`/products/${product.id}`}>
        <img src={product.image1} alt={product.title} className="w-60" />
      </Link>
      <div className="productCardInfos">
        <div className="productCardDetails">
          <div className="flex justify-between">
            <div className="flexflex-col">
              <p className="text-xs font-light	text-slate-500">
                {product.category}{" "}
              </p>
              <h1 className="">{product.title}</h1>

              <p>{product.price}€ </p>
            </div>

            <BsHeartFill
              className={
                favorites.find((x) => x.id === product.id)
                  ? "isFavorite"
                  : "notFavorite"
              }
              onClick={() => {
                handleFavoris(product)
              }}
              type='button'

            />
          </div>
         
          <button onClick={() => onAdd(product)} className="add">
            Ajout rapide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
