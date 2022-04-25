import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import PanierContext from "../contexts/PanierContext";
import "./../styles/details.css";
import FavorisContext from "../contexts/FavorisContext";

const ProductDetails = () => {
   const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [rates, setRates] = useState([]);
  const { cartItems, onAdd } = useContext(PanierContext);
  const { favorites, handleFavoris } = useContext(FavorisContext);

  useEffect(() => {
    getProduct();
    getComments();
    getRates();
  }, [params.id]);

  const getProduct = () => {
    axios
      .get(`http://localhost:8000/products/${params.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  };

  const getComments = () => {
    axios
      .get(`http://localhost:8000/comments/${params.id}`)
      .then((response) => {
        setComments(response.data);
      });
  };

  const getRates = () => {
    axios
      .get(`http://localhost:8000/comments/rates/${params.id}`)
      .then((response) => {
        setRates(response.data);
      });
  };

  //calcul de la moyenne des etoiles
  const allRates = rates.map((rate) => rate.rate_id);

  const initialValue = 0;
  const sumWithInitial = allRates.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const result = Math.round(sumWithInitial / allRates.length);
  return (
    <div className="mainProduct">
      <div className=" backProducts">
           <a
          href="#!"
          className="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out "
          onClick={() => navigate(-1)}
        >
          Revenir à la page précédente
        </a>
      </div>
      <div className="detailGlobal">
        <div className="detailImage">
          <div className="productImage">
            <div className="autreImage">
              <img
                src={product.image2}
                alt={product.title}
                className={product.image3 ? "image2 w-32" : "image2 w-44"}
              />
              {product.image3 ? (
                <img
                  src={product.image3}
                  alt={product.title}
                  className="image3 w-32"
                />
              ) : null}
            </div>
            <img src={product.image1} alt={product.title} className="image1" />
          </div>

          <div className="detailProduct">
            <h1 className="detailTitle">
              {product.title}
              <BsHeartFill
                className={
                  favorites.find((x) => x.id === product.id)
                    ? "isFavorite"
                    : "notFavorite"
                }
                onClick={() => {
                  handleFavoris(product);
                }}
                type="button"
              />
            </h1>

            <p className="detailCategory">{product.category}</p>

            <p className="detailDescription">{product.description}</p>
            <p className="detailContenance">
              Contenance : <br /> {product.contenance}
            </p>
            <div className="stars mt-2 flex">
              {Array.from({ length: result }, (_, i) => (
                <AiFillStar key={i} color={"#d8b01a"} fontSize={"1.5rem"} />
              ))}
              {result < 5
                ? Array.from({ length: 5 - result }, (_, i) => (
                    <AiFillStar key={i} color={"#e3e3e3"} fontSize={"1.5rem"} />
                  ))
                : null}
            </div>
            <button className="addCart" onClick={() => onAdd(product)}>
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
      </div>
      <div className="ingredientsContainer">
        <div className="ingredientsdetails">
          <p className="font-semibold">Ingrédients :</p>
          <p>{product.ingrédients}</p>
        </div>
      </div>
      <div className="listeCommentaire">
        <div className="commentaires">
          <p className="font-semibold">Avis Clients :</p>
          {comments
            ? comments.map((comment, i) => (
                <div key={i}>
                  <p>Client : {comment.comment}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
