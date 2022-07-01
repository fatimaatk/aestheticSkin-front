import React from "react";
import { ProgressBarInfo } from "../Common/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";
import "./../../styles/checkout.css";
import { useState } from "react";

const CheckoutInformation = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [differentBilling, setDifferentBilling] = useState(false);
  return (
    <div className="checkoutInfo">
      <ProgressBarInfo progress="w-1/2" />
      <div className=" flex justify-center p-1 ">
        <div className="rounded-md flex justify-center">
          <form id="payment-form" method="POST" action="">
            <section className="flex justify-center">
              <div className="flex flex-col m-6 justify-center">
                <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8 text-center">
                  Adresse de livraison
                </h1>
                <fieldset className="mb-3 shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Nom</span>
                    <input
                      name="name"
                      className="focus:outline-none px-3"
                      placeholder={user.lastname}
                      required=""
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Prénom</span>
                    <input
                      name="prenom"
                      className="focus:outline-none px-3"
                      placeholder={user.firstname}
                      required=""
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Addresse</span>
                    <input
                      name="address"
                      className="focus:outline-none px-3"
                      placeholder={user.adresse}
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Code postal</span>
                    <input
                      name="codePostal"
                      className="focus:outline-none px-3"
                      placeholder={user.codePostal}
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Ville</span>
                    <input
                      name="ville"
                      className="focus:outline-none px-3"
                      placeholder={user.ville}
                    />
                  </label>
                </fieldset>{" "}
                <div className="flex justify-center">
                  <div className="form-check form-switch mt-6">
                    <input
                      className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-slate-50 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={() => setDifferentBilling(!differentBilling)}
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
                  <fieldset className="mb-3  shadow-lg rounded text-gray-600">
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Nom</span>
                      <input
                        name="name"
                        className="focus:outline-none px-3"
                        placeholder={user.lastname}
                        required=""
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Prénom</span>
                      <input
                        name="prenom"
                        className="focus:outline-none px-3"
                        placeholder={user.firstname}
                        required=""
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Addresse</span>
                      <input
                        name="address"
                        className="focus:outline-none px-3"
                        placeholder={user.adresse}
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Code postal</span>
                      <input
                        name="codePostal"
                        className="focus:outline-none px-3"
                        placeholder={user.codePostal}
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Ville</span>
                      <input
                        name="ville"
                        className="focus:outline-none px-3"
                        placeholder={user.ville}
                      />
                    </label>
                  </fieldset>
                </div>
              )}
            </section>
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

        <Link to="/monpanier/paiement">
          <button className="p-2 m-6 w-48 rounded text-white bg-neutral-300 hover:bg-pink-600">
            SUIVANT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutInformation;
