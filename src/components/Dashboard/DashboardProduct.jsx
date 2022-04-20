import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import EditTitleProduct from "./EditProducts.jsx/EditTitleProduct";

const DashboardProduct = () => {
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

  console.log(arrayOfImage);
  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <div className="flex justify-center p-20 text-center">
        <div className="grid grid-cols-2  gap-4 mr-20">
          {arrayOfImage.map((image) => (
            <img src={image} alt="" className="w-48" />
          ))}
        </div>
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
              <div className="bg-neutral-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-gray-500">Texture</dt>
                <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.texture}
                </dd>
              </div>
              <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-gray-500">
                  Descriptions
                </dt>
                <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.description}
                </dd>
              </div>
              <div className="bg-neutral-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-gray-500">Contenance</dt>
                <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.contenance}
                </dd>
              </div>
              <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-gray-500">Prix</dt>
                <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.price} €
                </dd>
              </div>
              <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-l font-medium text-gray-500">
                  Ingrédients
                </dt>
                <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.ingrédients}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
