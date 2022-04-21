import React from "react";
import { Link } from "react-router-dom";

const DashboardProductCard = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className=" shadow-lg bg-white w-3/5 max-w-xs">
        <Link to={`/admin/dashboard/product/${product.id}`} type="button">
          <img src={product.image1} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-m font-medium mb-2">
            {product.title}
          </h5>
          <h5 className="text-gray-900 text-m font-medium mb-2">
            Référence : {product.id}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductCard;
