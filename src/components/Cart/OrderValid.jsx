import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";
import Login from "../Login";
import { ProgressBarCart } from "../Common/ProgressBar";

const OrderValid = () => {
  const params = useParams();
  const { user } = useContext(UserContext);

  return (
    <>
      {user.email ? (
        <div className=" flex  justify-center items-center ">
          <div className="flex flex-col basis-1/2 items-center">
            <img
              src="https://images.pexels.com/photos/8140915/pexels-photo-8140915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="w-1/2"
            />
          </div>
          <div className="connection flex flex-col basis-1/4 ">
            <div className="logoConnection">
              <h1 className="logoConnection1 text-5xl">Aēsthetic </h1>
              <h1 className="logoConnection1 text-sm text-right">SKIN</h1>
            </div>
            <div className="flex gap-5 flex-col text-l text-center">
              <h1>Commande n° {params.id} </h1>
              <h1>Merci pour votre achat ! </h1>
              <h1>
                Suivez l'ensemble de vos commandes ainsi que leurs
                <br /> statuts dans votre compte client.
              </h1>
            </div>
            <Link to={`/`}>
              <button className="p-2 m-6 w-48 rounded text-white bg-neutral-300 hover:bg-pink-600">
                Revenir à la page d'accueil
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className=" flex  justify-center items-center ">
          <div className="flex flex-col basis-1/2 items-center">
            <img
              src="https://images.pexels.com/photos/8140915/pexels-photo-8140915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="w-1/2"
            />
          </div>
          <div className="connection flex flex-col basis-1/4 ">
            <div className="logoConnection">
              <h1 className="logoConnection1 text-5xl">Aēsthetic </h1>
              <h1 className="logoConnection1 text-sm text-right">SKIN</h1>
            </div>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderValid;
