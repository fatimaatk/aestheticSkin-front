import React from "react";
import { ProgressBarInfo } from "../Common/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";
import "./../../styles/checkout.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Login from "../Login";

const CheckoutInformation = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [differentBilling, setDifferentBilling] = useState(false);
  const [prenomDelivery, setPrenomDelivery] = useState("");
  const [prenomShipping, setPrenomShipping] = useState("");
  const [nomDelivery, setNomDelivery] = useState("");
  const [nomShipping, setNomShipping] = useState("");
  const [adressDelivery, setAdressDelivery] = useState("");
  const [addressShipping, setAdresseShipping] = useState("");
  const [codePostalDelivery, setCodePostalDelivery] = useState("");
  const [codePostalShipping, setCodePostalShipping] = useState("");
  const [villeDelivery, setVilleDelivery] = useState("");
  const [villeShipping, setVilleShipping] = useState("");
  const [error, setError] = useState("");
  const [suivant, setSuivant] = useState(false);
  const [commandeEncours, setCommandeEnCours] = useState([]);
  const [cartId, setCardId] = useState([]);

  const getAllIdFromCart = () => {
    axios.get(`http://localhost:8000/cart/allCartId`).then((response) => {
      setCardId(response.data.map((x) => x.id));
    });
  };

  useEffect(() => {
    getAllIdFromCart();
  }, []);

  const handleCreateNewCart = (e) => {
    e.preventDefault();
    Cookies.set("Id_Cart", commandeEncours);
    if (
      Cookies.get("Id_Cart") !== "" &&
      cartId.filter((x) => x === Cookies.get("Id_Cart"))
    ) {
      console.log("test");
      if (
        prenomDelivery &&
        nomDelivery &&
        adressDelivery &&
        codePostalDelivery &&
        villeDelivery
      ) {
        axios
          .put(
            `http://localhost:8000/cart/delivery/${Cookies.get("Id_Cart")}`,
            {
              user_id: user.id,
              nom_delivery: nomDelivery,
              prenom_delivery: prenomDelivery,
              nom_shipping: differentBilling ? nomShipping : nomDelivery,
              prenom_shipping: differentBilling
                ? prenomShipping
                : prenomDelivery,
              adress_shipping: differentBilling
                ? addressShipping
                : adressDelivery,
              adress_delivery: adressDelivery,

              codePostal_shipping: differentBilling
                ? codePostalShipping
                : codePostalDelivery,

              ville_shipping: differentBilling ? villeShipping : villeDelivery,
              codePostal_delivery: codePostalDelivery,
              ville_delivery: villeDelivery,
            }
          )
          .then(({ data }) => {
            if (data.error) console.log(data.error);
            else {
              console.log("infos mis à jour");
            }
          });
      } else setError("Tous les champs sont requis.");
    } else {
      if (
        prenomDelivery &&
        nomDelivery &&
        adressDelivery &&
        codePostalDelivery &&
        villeDelivery
      ) {
        const newCart = {
          user_id: user.id,
          nom_delivery: nomDelivery,
          prenom_delivery: prenomDelivery,
          nom_shipping: differentBilling ? nomShipping : nomDelivery,
          prenom_shipping: differentBilling ? prenomShipping : prenomDelivery,
          adress_shipping: differentBilling ? addressShipping : adressDelivery,
          adress_delivery: adressDelivery,

          codePostal_shipping: differentBilling
            ? codePostalShipping
            : codePostalDelivery,

          ville_shipping: differentBilling ? villeShipping : villeDelivery,
          codePostal_delivery: codePostalDelivery,
          ville_delivery: villeDelivery,
        };
        axios
          .post("http://localhost:8000/cart/new", newCart)
          .then(({ data }) => {
            if (data.error) setError(data.error);
            else {
              setCommandeEnCours(data);
              Cookies.set("Id_Cart", data);
            }
          });
      } else setError("Tous les champs sont requis.");
    }
  };
  return (
    <>
      {user.email ? (
        <div className="checkoutInfo">
          <ProgressBarInfo progress="w-1/2" />
          <div className=" flex justify-center p-1 ">
            <div className="rounded-md flex justify-center">
              <form
                id="payment-form"
                onSubmit={handleCreateNewCart}
                encType="multipart/form-data"
              >
                <section className="flex justify-center">
                  <div className="flex flex-col m-6 justify-center">
                    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8 text-center">
                      Adresse de livraison
                    </h1>
                    <div className="mb-3 shadow-lg rounded text-gray-600">
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Nom</span>
                        <input
                          name="nom_delivery"
                          className="focus:outline-none px-3"
                          placeholder={user.lastname}
                          required=""
                          onChange={(e) => setNomDelivery(e.target.value)}
                        />
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Prénom</span>
                        <input
                          name="prenom_delivery"
                          className="focus:outline-none px-3"
                          placeholder={user.firstname}
                          required=""
                          onChange={(e) => setPrenomDelivery(e.target.value)}
                        />
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Addresse</span>
                        <input
                          name="address_delivery"
                          className="focus:outline-none px-3"
                          placeholder={user.adresse}
                          onChange={(e) => setAdressDelivery(e.target.value)}
                        />
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Code postal</span>
                        <input
                          name="codePostal_delivery"
                          className="focus:outline-none px-3"
                          placeholder={user.codePostal}
                          onChange={(e) =>
                            setCodePostalDelivery(e.target.value)
                          }
                        />
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Ville</span>
                        <input
                          name="ville_delivery"
                          className="focus:outline-none px-3"
                          placeholder={user.ville}
                          onChange={(e) => setVilleDelivery(e.target.value)}
                        />
                      </label>
                    </div>{" "}
                    <div className="flex justify-center">
                      <div className="form-check form-switch mt-6">
                        <input
                          className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-slate-50 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onChange={() =>
                            setDifferentBilling(!differentBilling)
                          }
                          value={differentBilling}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Adresse de facturation différente
                        </label>
                      </div>
                    </div>
                  </div>
                  {differentBilling && (
                    <div className="flex flex-col m-6">
                      <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
                        Adresse de facturation
                      </h1>
                      <div className="mb-3  shadow-lg rounded text-gray-600">
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span className="text-right px-2">Nom</span>
                          <input
                            name="nom_shipping"
                            className="focus:outline-none px-3"
                            placeholder={user.lastname}
                            required=""
                            onChange={(e) =>
                              differentBilling && setNomShipping(e.target.value)
                            }
                          />
                        </label>
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span className="text-right px-2">Prénom</span>
                          <input
                            name="prenom_shipping"
                            className="focus:outline-none px-3"
                            placeholder={user.firstname}
                            required=""
                            onChange={(e) =>
                              differentBilling &&
                              setPrenomShipping(e.target.value)
                            }
                          />
                        </label>
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span className="text-right px-2">Addresse</span>
                          <input
                            name="address_shipping"
                            className="focus:outline-none px-3"
                            placeholder={user.adresse}
                            onChange={(e) =>
                              differentBilling &&
                              setAdresseShipping(e.target.value)
                            }
                          />
                        </label>
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span className="text-right px-2">Code postal</span>
                          <input
                            name="codePostal_shipping"
                            className="focus:outline-none px-3"
                            placeholder={user.codePostal}
                            onChange={(e) =>
                              differentBilling &&
                              setCodePostalShipping(e.target.value)
                            }
                          />
                        </label>
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                          <span className="text-right px-2">Ville</span>
                          <input
                            name="ville_shipping"
                            className="focus:outline-none px-3"
                            placeholder={user.ville}
                            onChange={(e) =>
                              differentBilling &&
                              setVilleShipping(e.target.value)
                            }
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </section>
                <div className="flex justify-center">
                  <button
                    className=" p-2 m-6 w-48 rounded text-white bg-neutral-300 hover:bg-pink-600 text-center"
                    type="submit"
                    value="Send"
                    onClick={() => setSuivant(true)}
                  >
                    ENREGISTRER
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="#!"
              className="p-2 m-6 w-48 rounded text-white bg-neutral-300 hover:bg-pink-600 text-center"
              onClick={() => navigate(-1)}
            >
              PRECEDENT
            </a>
            {suivant && (
              <Link to="/monpanier/paiement">
                <button className="p-2 m-6 w-48 rounded text-white bg-neutral-300 hover:bg-pink-600">
                  SUIVANT
                </button>
              </Link>
            )}
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

export default CheckoutInformation;
