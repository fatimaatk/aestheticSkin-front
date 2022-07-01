import React from "react";
import { useContext } from "react";
import PanierContext from "./../../contexts/PanierContext";
import { Link, useNavigate } from "react-router-dom";
import { ProgressBarConfirm } from "../Common/ProgressBar";
import Payment from "./Payment";

const ConfirmOrder = () => {
  const { cartItems } = useContext(PanierContext);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.5;
  const totalPrice = itemsPrice + shippingPrice;

  const navigate = useNavigate();
  return (
    <>
      <ProgressBarConfirm />
      <div className="flex justify-center">
        <div className="col-span-1 bg-white lg:block hidden w-1/4">
          <h1 className="py-6 border-b-2 text-xl text-center text-gray-600 px-8">
            Résumé de votre commande
          </h1>
          <ul className="py-6 border-b space-y-6 px-8">
            {cartItems.map((item, i) => (
              <li className="grid grid-cols-6 gap-2 border-b-1" key={i}>
                <div className="col-span-1 self-center">
                  <img
                    src={item.image1}
                    alt="Product"
                    className="rounded w-full"
                  />
                </div>
                <div className="flex flex-col col-span-3 pt-2">
                  <span className="text-gray-600 text-md font-semi-bold">
                    {item.title}
                  </span>
                </div>
                <div className="col-span-2 pt-3">
                  <div className="flex items-center space-x-2 text-sm justify-between">
                    <span className="text-gray-400">
                      {item.qty} x {item.price}€
                    </span>
                    <span className="text-neutral-400 font-semibold inline-block">
                      {(item.price * item.qty).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-8 border-b">
            <ul className="py-6 space-y-6 px-8">
              <li className="grid grid-cols-4 gap-2 border-b-1 flex justify-center items-center">
                <div className="flex flex-col col-span-4 pt-2 justify-center items-center">
                  LIVRAISON : 23 rue de l'amiral courbet bat 2a p 9 59000 LILLE
                </div>
              </li>
              <li className="grid grid-cols-4 gap-2 border-b-1 flex justify-center items-center">
                <div className="flex flex-col col-span-4 pt-2 justify-center items-center">
                  FACTURATION : 23 rue de l'amiral courbet bat 2a p 9 59000
                  LILLE
                </div>
              </li>
            </ul>
          </div>
          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Sous total</span>
              <span className="font-semibold text-neutral-500">
                {itemsPrice.toFixed(2)}€
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Livraison</span>
              <span className="font-semibold text-neutral-500">
                {" "}
                {shippingPrice === 0 ? (
                  <p>Livraison offerte</p>
                ) : (
                  <p>{shippingPrice.toFixed(2)}€</p>
                )}
              </span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <strong>{totalPrice.toFixed(2)}€</strong>
          </div>
          <Payment />
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
                PAIEMENT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
