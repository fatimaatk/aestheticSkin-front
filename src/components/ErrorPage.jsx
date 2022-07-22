import React from "react";
import { Link } from "react-router-dom";
import "../styles/errorPage.css";
const ErrorPage = () => {
  return (
    <div className="mainErrorPage  flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 gap-20">
        <div>
          <span className="oops">OOPS !</span>
        </div>
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Page introuvable
          </p>
          <p className="mb-8">
            Nous n'avons pas trouvé la page que vous recherchez ...
          </p>

          <Link
            to="/"
            className="px-4 inline py-2 text-sm font-medium leading-5  text-black transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-neutral bg-neutral-300 active:shadow hover:shadow"
          >
            Revenir à la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
