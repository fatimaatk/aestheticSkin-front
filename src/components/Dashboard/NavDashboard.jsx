import React from "react";
import { Link } from "react-router-dom";

const NavDashboard = () => {
  return (
    <nav className="bg-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <Link
                  to="/admin/dashboard"
                  className="text-neutral-700 hover:bg-neutral-400 hover:text-neutral-100 px-3 py-2 rounded-md text-l uppercase font-medium"
                >
                  {" "}
                  Accueil
                </Link>

                <Link
                  to="/admin/dashboard/products"
                  className="text-neutral-700 hover:bg-neutral-400 hover:text-neutral-100 px-3 py-2 rounded-md text-l uppercase font-medium"
                >
                  {" "}
                  Tous les produits
                </Link>
                <Link
                  to="/admin/dashboard/addproduct"
                  className="text-neutral-700 hover:bg-neutral-400 hover:text-neutral-100 px-3 py-2 rounded-md text-l uppercase font-medium"
                >
                  {" "}
                  Ajouter un produit
                </Link>

                <Link
                  to="/admin/dashboard/commentaires"
                  className="text-neutral-700 hover:bg-neutral-400 hover:text-neutral-100 px-3 py-2 rounded-md text-l uppercase font-medium"
                >
                  {" "}
                  Commentaires
                </Link>

                <Link
                  to="/admin/dashboard/comptes"
                  className="text-neutral-700 hover:bg-neutral-400 hover:text-neutral-100 px-3 py-2 rounded-md text-l uppercase font-medium"
                >
                  {" "}
                  Comptes
                </Link>
                <Link
                  to="/admin/dashboard/commandes"
                  className="text-neutral-700 hover:bg-neutral-400 hover:text-neutral-100 px-3 py-2 rounded-md text-l uppercase font-medium"
                >
                  {" "}
                  Commandes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDashboard;
