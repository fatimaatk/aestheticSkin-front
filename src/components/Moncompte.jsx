import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"
import { UserContext } from "../contexts/UserContext"
import axios from "axios";
const MonCompte = () => {
  const params = useParams();
  const [infos, setInfos] = useState([]);
  const [error, setError] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [result, setResult] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    getInfos();
  }, []);


  const getInfos = () => {
    axios.get(`http://localhost:8000/user/infos/${user.id}`)
    .then(response => {
        setInfos(response.data)
        setFirstname(response.data.firstname)
        setLastname(response.data.lastname)
    })
    
  }

      const handleSubmit = (e) => {
        const update = { firstname: firstname, lastname:lastname, id: user.id }
        axios.put(`http://localhost:8000/user/${user.id}`, update)
        .then(({ data }) => {
          if (data.error) setError(data.error);
          else {
            setFirstname('');
            setLastname('');
            setInfos('');
          }
          e.target.reset();
          setResult(true);
         
        })
         .then(() => window.location.reload());
      } 

  console.log(infos)
  console.log(user)
  console.log('1', firstname)
  console.log('2',lastname)
  return (
      <div className="text-center">
          { isAuthenticated && user && 
          <div className="mt-20 mb-20">
          <h1 className="font-bold text-xl">Vos informations personnelles</h1>
          <div className="mt-10 mb-10"> <p>Nom : {user.nom} </p> 
          <p>Prénom : {user.prenom}</p> 
          </div>
          <hr></hr>
          <div className="mt-4">
          <h1 className="font-bold text-l">
            Mettre à jour 
          </h1>
          <div className="mt-10"> 
          <form onSubmit={handleSubmit}>

         
          <input class=" border border-solid border-gray-400 py-2 px-4 text-gray-700 " id="lastname" type="text" placeholder="Nom" onChange={(e) => setLastname(e.target.value)}/>
          <input class=" border border-solid border-gray-400 py-2 px-4 text-gray-700" id="firstname" type="text" placeholder="Prénom" onChange={(e) => setFirstname(e.target.value)}/>
      
         
          <button class="bg-transparent  text-gray-600 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Enregistrer
</button>
{error && <p className="register-error">{error}</p>}
          </form>
          </div>
          </div>
          </div>
          }
        
         { result ? <p>Les modifications ont bien été prises en compte.</p> : null}
      </div>
  )
}

export default MonCompte;