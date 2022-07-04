import React, { useState } from "react";
import { Field } from "react-final-form";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Payment = ({ setPaiement }) => {
  return (
    <ul className="py-6 border-b border-t space-y-6 px-8">
      <li className="flex items-center justify-center gap-2">
        <input
          type="radio"
          className="flex justify-center items-center gap-3 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-600 active:shadow-lg transition duration-150 ease-in-out"
          value="3"
          id="paiement"
          name="paiement"
          onClick={(e) => setPaiement(e.target.value)}
        />
        PAYER PAR CARTE <FaCcVisa style={{ fontSize: "50px" }} />
        <FaCcMastercard style={{ fontSize: "50px" }} />
      </li>
      <li className="flex items-center justify-center gap-2">
        <input
          type="radio"
          className="flex justify-center items-center gap-3 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          value="1"
          id="paiement"
          name="paiement"
          onClick={(e) => setPaiement(e.target.value)}
        />
        PAYER AVEC PAYPAL <FaCcPaypal style={{ fontSize: "50px" }} />
      </li>
    </ul>
  );
};

export default Payment;
