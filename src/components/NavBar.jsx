import React from "react";
import "./../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = ({isAuthenticated}) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  console.log('auth', isAuthenticated);
  return (
    <div>
      <div className="messagepromo">
        <p className="messagepromo1">
          Profitez de la livraison offerte dès 50 euros d'achat.
        </p>
        {/* <p className='messagepromo2'>Livraison en France et dans toute l'Europe.</p> */}
      </div>
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <h1 className="logo1 text-5xl">Aēsthetic </h1>
          </Link>
          <Link to="/">
            <h1 className="logo1 text-sm text-right">SKIN</h1>
          </Link>
        </div>
        <ul className="ulMenu">
          <Link to="/products">
            <li className="liMenu">PRODUITS</li>
          </Link>
          <Link to="/lamarque">
            <li className="liMenu">LA MARQUE</li>
          </Link>
          <Link to="/connexion">
            <li className="liMenu">MON COMPTE</li>
          </Link>
          <Link to="/monpanier">
            <li className="liMenu">PANIER</li>
          </Link>
          <li onClick={() => logout()}>DECONNEXION</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
