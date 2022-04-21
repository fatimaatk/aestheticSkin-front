import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import EditTitleProduct from "./EditProducts.jsx/EditTitleProduct";
import EditTextureProduct from "./EditProducts.jsx/EditTextureProduct";
import EditDescriptions from "./EditProducts.jsx/EditDescriptions";
import EditContenance from "./EditProducts.jsx/EditContenance";
import EditPrice from "./EditProducts.jsx/EditPrice";
import EditIngredients from "./EditProducts.jsx/EditIngredients";
import EditImages from "./EditProducts.jsx/EditImages";

const DashboardProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get(`http://localhost:8000/products/${params.id}`)
      .then((response) => {
        setProduct(response.data);
      });
  };

  useEffect(() => {
    getProduct();
  }, [params.id]);

  const arrayOfImage = [
    product.image1,
    product.image2,
    product.image3,
    product.image4,
  ];

  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <div className="pt-4 pl-20">
        <a
          href="#!"
          className="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out mt-5"
          onClick={() => navigate(-1)}
        >
          Revenir à la page précédente
        </a>
      </div>
      <div className="flex justify-center items-start  text-center m-5">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-solid w-2/5">
          <div className="px-4 py-5 sm:px-6 text-center">
            <h3 className="text-xl leading-6 font-medium text-gray-900 ">
              {product.title}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-neutral-100 px-4 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-gray-500 ">ID</dt>
                <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 r">
                  {product.id}
                </dd>
              </div>

              <EditTitleProduct product={product} />
              <EditTextureProduct product={product} />
              <EditDescriptions product={product} />
              <EditContenance product={product} />
              <EditPrice product={product} />
              <EditIngredients product={product} />
            </dl>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-4 ml-20">
          {arrayOfImage.map((image, i) => (
            <img src={image} alt="" key={i} className="w-48" />
          ))}
          <EditImages product={product} />
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
