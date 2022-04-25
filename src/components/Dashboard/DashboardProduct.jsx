import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import EditTitleProduct from "./EditProducts.jsx/EditTitleProduct";
import EditTextureProduct from "./EditProducts.jsx/EditTextureProduct";
import EditCategory from "./EditProducts.jsx/EditCategory";
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
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-solid w-4/5">
          <div className="px-4 py-3 sm:px-6 text-center">
            <h3 className="text-xl leading-6 font-medium text-gray-900 ">
              Nom du produit : {product.title} <br/> <br/> Référence : {product.id}
            </h3>
          </div>
          <div className="border-t border-gray-200 flex">
            <dl className="w-3/5 border-2 border-gray-200">
             

              <EditTitleProduct product={product} />
              <EditDescriptions product={product} />
              <EditTextureProduct product={product} />
              <EditCategory product={product} />
              <EditContenance product={product} />
              <EditPrice product={product} />
              <EditIngredients product={product} />
            </dl>
             <dl className="w-2/5 border-2 border-gray-200">
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
