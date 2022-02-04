import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

const Favoris = () => {
  const params = useParams();
 const [favoris, setFavoris] = useState([]);
const [error, setError] = useState('');

  const { user } = useContext(UserContext);
  console.log(user);

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
  console.log(error)
  console.log(favoris)

  return(
    <div className="flex flex-col justify-center items-center mt-5 mb-5">
      <h1 className="mb-4">Mes favoris</h1>
      {
        favoris ? 
        favoris.map((fav) => (
          <div className="flex items-center justify-center">
        <p>Numéro du produit : {fav.product_id} </p>
        <button className="text-xl ml-2"  type='button' onClick={() => handleRemove(fav.product_id)}> Supprimer </button>
</div>
        )) : 'loading ...'
      }
    </div>
  )
}

export default Favoris;