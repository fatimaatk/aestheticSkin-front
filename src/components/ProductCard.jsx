import "./../styles/productcard.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PanierContext from "../contexts/PanierContext";
import { UserContext } from "../contexts/UserContext";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductCard = ({ product }) => {
  const params = useParams();
  const [favoris, setFavoris] = useState([]);
 const [error, setError] = useState('');
  const {  onAdd } = useContext(PanierContext);
  const { user } = useContext(UserContext);


  useEffect(() => {
    getFavoris();
  }, []);

  const getFavoris = () => {
    axios.get(`http://localhost:8000/favoris/${user.id}`)
    .then(response => {
        setFavoris(response.data);
    })
  }
  const handleRemove = () => {
    axios.delete(`http://localhost:8000/favoris/${user.id}`)
    .then(({ data }) => {
      if (data.error) setError(data.error);
      else {
        setError('');
        setFavoris('');
      }
    })
     .then(() => window.location.reload());
  } 

  
console.log('favoris', favoris)
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
            <button onClick={() => handleRemove(product)} className="add">
            Supprimer
          </button>
          <button onClick={() => onAdd(product)} className="add">
            Ajout rapide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
