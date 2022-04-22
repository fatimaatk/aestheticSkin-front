import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Store/ProductsSlice";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
                25
              </dd>
            </div>
            <div className="bg-neutral-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-l font-medium text-gray-500">
                Nombre de comptes clients
              </dt>
              <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2">
                10
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
