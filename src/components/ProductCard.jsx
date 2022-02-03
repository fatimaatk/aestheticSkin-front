import "./../styles/productcard.css";
import { useContext } from "react";
import PanierContext from "../contexts/PanierContext";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cartItems, onAdd } = useContext(PanierContext);
  //console.log(product)

  console.log(product);
  console.log("panier", cartItems);

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
            <BsHeartFill className="fav m-1" />
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
