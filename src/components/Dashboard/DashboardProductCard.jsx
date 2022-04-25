import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";

const DashboardProductCard = ({ product }) => {
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);

  const handleSubmit = async () => {
    await axios
      .delete(`http://localhost:8000/products/delete/${product.id}`)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
          window.location.reload();
        }
      });
  };

  return (
    <div className="flex justify-center">
      <div className=" shadow-lg bg-white w-3/5 max-w-xs">
        <Link to={`/admin/dashboard/product/${product.id}`} type="button">
          <img src={product.image1} alt="" />
        </Link>

        <div className="p-6 flex items-center justify-around">
          <div>
            <h5 className="text-gray-900 text-m font-medium mb-2">
              {product.title}
            </h5>
            <h5 className="text-gray-900 text-m font-medium mb-2">
              Référence : {product.id}
            </h5>
          </div>
          <div className="ml-5">
            <RiDeleteBinLine onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductCard;
