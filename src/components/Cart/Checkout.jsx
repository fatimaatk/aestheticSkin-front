import React from "react";
import { useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";
import CartSummary from "./CartSummary";
import Login from "../Login";
import { ProgressBarCart } from "../Common/ProgressBar";

const Checkout = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.email ? (
        <div className="flex flex-col">
          <ProgressBarCart progress="w-1/4" />
          <CartSummary />
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

export default Checkout;
