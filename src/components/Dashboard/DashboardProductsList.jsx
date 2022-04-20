import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Store/ProductsSlice";
import NavDashboard from "./NavDashboard";
import DashboardProductCard from "./DashboardProductCard";

const DashboardProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {loading && (
          <div class="flex justify-center items-center">
            <div
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <h2 className="text-center font-medium text-xl"> Tous les produits</h2>
        <div className="px-4 py-6 sm:px-0">
          <div class="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <DashboardProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductsList;
