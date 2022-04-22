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
import EditImage1 from "./EditProducts.jsx/EditImage1";
import EditImage2 from "./EditProducts.jsx/EditImage2";
import EditImage3 from "./EditProducts.jsx/EditImage3";
import EditImage4 from "./EditProducts.jsx/EditImage4";

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
              <EditImage1 id={product.id} image={product.image1} />
              <EditImage2 id={product.id} image={product.image2} />
              <EditImage3 id={product.id} image={product.image3} />
              <EditImage4 id={product.id} image={product.image4} />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
