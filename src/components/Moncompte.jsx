import { useContext, useState, useEffect } from "react";

import { UserContext } from "../contexts/UserContext";
import axios from "axios";
const MonCompte = () => {

  const [error, setError] = useState("");
  const [result, setResult] = useState(false);


  const { user } = useContext(UserContext);


  const [firstname, setFirstname] = useState([], () => {
    const result = localStorage.getItem("firstname");
    return result ?? JSON.parse(result);
  });
  const [lastname, setLastname] = useState([], () => {
    const result = localStorage.getItem("lastname");
    return result ?? JSON.parse(result);
  });

  useEffect(() => {
    getInfos();
  }, []);

  useEffect(() => { 
    localStorage.setItem("firstname", JSON.stringify(firstname));
  }, [firstname]);

  useEffect(() => {
    localStorage.setItem("lastname", JSON.stringify(lastname));
  }, [lastname]);

  const getInfos = async () => {
    await axios
      .get(`http://localhost:8000/user/infos/${user.id}`)
      .then((response) => {
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
      });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = { firstname: firstname, lastname: lastname, id: user.id };
    await axios
      .put(`http://localhost:8000/user/${user.id}`, update)
      .then(({ data }) => {
        console.log(data)
        if (data.error) setError(data.error);
        else {
          setResult(true)
          e.target.reset();
          console.log('ok', result)
        }       
      })

  };

  setTimeout(() => {
    setResult(false);
  }, 10000);

  return (
    <div className="text-center">
      {user && (
        <div className="mt-20 mb-20">
          <h1 className="font-bold text-xl">Vos informations personnelles</h1>
          <div className="mt-10 mb-10">
            {" "}
            <p>Nom : {firstname} </p>
            <p>Prénom : {lastname}</p>
          </div>

          <div className="">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalFullscreen"
            >
              Editer mes coordonnées
            </button>
          </div>

          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalFullscreen"
            tabindex="-1"
            aria-labelledby="exampleModalFullscreenLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalFullscreenLabel"
                  >
                    Modifier mes coordonnées
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4">
                  <form onSubmit={handleSubmit}>
                    <input
                      className=" border border-solid border-gray-400 py-2 px-4 text-gray-700 "
                      id="lastname"
                      type="text"
                      placeholder="Nom"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <input
                      className=" border border-solid border-gray-400 py-2 px-4 text-gray-700"
                      id="firstname"
                      type="text"
                      placeholder="Prénom"
                      onChange={(e) => setFirstname(e.target.value)}
                    />

                    <button className="bg-transparent  text-gray-600 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Enregistrer
                    </button>
                    {result ? <p className="mt-6">Modification prise en compte</p> : null}
   
                  </form>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* { result ? <p>Les modifications ont bien été prises en compte.</p> : null} */}
    </div>
  );
};

export default MonCompte;
