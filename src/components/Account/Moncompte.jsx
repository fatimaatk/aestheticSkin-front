import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import EditAccount from "./EditAccount/EditAccount";
import { FaUserEdit, FaShoppingCart } from "react-icons/fa";
import Connection from "../Connection";
import MyOrders from "./MyOrders";

const MonCompte = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.email ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 flex justify-center items-start">
            <div className="py-2 flex justify-center  sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center mt-6 ">
                <div className="flex justify-around align-center  p-6 ">
                  <span className=" text-center text-lg font-medium  text-gray-900">
                    Mes informations
                  </span>
                  <FaUserEdit />
                </div>

                <EditAccount />
              </div>
            </div>
            <div className="py-2 flex justify-center  sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center mt-6 ">
                <div className="flex justify-around  align-center  p-6 ">
                  <span className=" text-center text-lg font-medium  text-gray-900">
                    Mes Commandes
                  </span>
                  <FaShoppingCart />
                </div>
                <MyOrders user={user} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Connection />
      )}
    </>
  );
};

export default MonCompte;
