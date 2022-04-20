import React from "react";
import { Link } from "react-router-dom";

const DashboardProductCard = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className=" shadow-lg bg-white w-3/5 max-w-xs">
        <a href="#!">
          <img src={product.image1} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-m font-medium mb-2">
            {product.title}
          </h5>
          <h5 className="text-gray-900 text-m font-medium mb-2">
            Référence : {product.id}
          </h5>
          <Link
            to={`/admin/dashboard/product/${product.id}`}
            type="button"
            className=" w-full inline-block px-6 py-2.5  text-white font-medium text-m leading-tight uppercase rounded shadow-md bg-gray-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Editer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductCard;
