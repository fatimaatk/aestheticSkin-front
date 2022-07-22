import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import PanierContext from "./../../contexts/PanierContext";
import "./../../styles/details.css";
import FavorisContext from "./../../contexts/FavorisContext";
import { UserContext } from "./../../contexts/UserContext";
import AddComment from "./AddComment";

const ProductDetails = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [rates, setRates] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { onAdd } = useContext(PanierContext);
  const { favorites, handleFavoris } = useContext(FavorisContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getProduct();
    getComments();
    getRates();
  }, [params.id]);

  const showAllComments = () => {
    setShowAll(!showAll);
  };
  const getProduct = () => {
    axios
      .get(`http://localhost:8000/products/${params.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  };

  const getComments = () => {
    axios
      .get(`http://localhost:8000/comments/product/${params.id}`)
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
    <div className="mainProduct mb-10">
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
            <h1 className="detailTitle">{product.title}</h1>
            <BsHeartFill
              className={
                favorites.find((x) => x.id === product.id)
                  ? "isFavorite text-xl"
                  : "notFavorite"
              }
              onClick={() => {
                handleFavoris(product);
              }}
              type="button"
            />
            <p className="detailCategory">{product.category}</p>
            <p className="detailDescription">{product.description}</p>
            <p className="detailContenance">
              Contenance : <br /> {product.contenance}
            </p>
            <div className="flex flex-col">
              <div className="stars mt-2 flex">
                {Array.from({ length: result }, (_, i) => (
                  <AiFillStar key={i} color={"#d8b01a"} fontSize={"1.5rem"} />
                ))}
                {result < 5
                  ? Array.from({ length: 5 - result }, (_, i) => (
                      <AiFillStar
                        key={i}
                        color={"#e3e3e3"}
                        fontSize={"1.5rem"}
                      />
                    ))
                  : null}{" "}
                ({comments.length})
              </div>
              <div className="mt-2">
                {user.email ? (
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    className="hover:underline"
                  >
                    Donnez votre avis
                  </button>
                ) : (
                  <Link to="/connexion">
                    <button className="hover:underline">
                      Connectez vous et donnez votre avis
                    </button>
                  </Link>
                )}
              </div>
              <AddComment product={product} user={user.id} />
            </div>
            <div>
              <button className="addCart" onClick={() => onAdd(product)}>
                AJOUTER AU PANIER
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ingredientsContainer">
        <div className="ingredientsdetails">
          <p className="font-semibold">Ingrédients :</p>
          <p>{product.ingredients}</p>
        </div>
      </div>
      <div className="listeCommentaire">
        <div className="commentaires">
          <p className="font-semibold">Avis Clients :</p>
          {!showAll
            ? comments
                .sort((a, b) => b.rate_id - a.rate_id)
                .slice(0, 3)
                .map((comment, i) => (
                  <div key={i}>
                    <p>
                      {" "}
                      {comment.rate_id}/5 - {comment.comment}{" "}
                    </p>
                    <p></p>
                  </div>
                ))
            : comments.map((comment, i) => (
                <div key={i}>
                  <p>
                    {" "}
                    {comment.rate_id}/5 - {comment.comment}{" "}
                  </p>
                </div>
              ))}
          {!showAll && comments ? (
            <button className="hover:underline mt-3" onClick={showAllComments}>
              VOIR TOUS LES COMMENTAIRES
            </button>
          ) : (
            <button className="hover:underline mt-3" onClick={showAllComments}>
              REDUIRE LES COMMENTAIRES
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
