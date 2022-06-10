import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getProducts } from "../../Store/ProductsSlice";
import { useState } from "react";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [accounts, setAccounts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    getAccounts();
    getComments();
  }, []);

  const getAccounts = () => {
    axios.get(`http://localhost:8000/accounts`).then((response) => {
      setAccounts(response.data);
    });
  };
  const getComments = () => {
    axios.get(`http://localhost:8000/comments`).then((response) => {
      setComments(response.data);
    });
  };

  return (
    <div className="flex justify-center p-20 text-center">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-solid w-1/0">
        <div className="px-4 py-5 sm:px-6 text-center">
          <h3 className="text-xl leading-6 font-medium text-gray-900 ">
            Accueil
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-neutral-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-l font-medium text-gray-500 ">
                Nombre de produits en ligne
              </dt>
              <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 r">
                {products.length}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-l font-medium text-gray-500 text-center">
                Nombre total de commentaires
              </dt>
              <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
                {comments.length}
              </dd>
            </div>
            <div className="bg-neutral-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-l font-medium text-gray-500">
                Nombre de comptes clients
              </dt>
              <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                {accounts.length}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
