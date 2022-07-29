import "./../styles/navbar.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  BsCart,
  BsCartCheck,
  BsHeart,
  BsSearch,
  BsHeartFill,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import FavorisContext from "../contexts/FavorisContext";

const NavBar = (props) => {
  const { favorites } = useContext(FavorisContext);
  const { cartItems, isAuthenticated } = props;
  const [result, setResult] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = (e) => {
    setResult(e.target.value);
  };

  const token = Cookies.get("token");
  const tokenObj = token ? JSON.parse(token) : null;

  const logout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  const arrayOfQty = cartItems.map((x) => parseInt(x.qty));
  const qty = arrayOfQty.length > 0 && arrayOfQty.reduce((a, b) => a + b);

  return (
    <div>
      <div className="messagepromo">
        <p className="messagepromo1">
          Profitez de la livraison offerte dès 50 euros d'achat.
        </p>
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
        <div className="menuResponsive border m-10">
          <AiOutlineMenu
            className="text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        <ul className="ulMenu cursor-pointer">
          <div className="searchBar">
            <input
              className="searchArea"
              value={result}
              onChange={handleSearch}
              type="text"
              placeholder="Rechercher un produit ..."
            />
            <Link to={`/search/${result}`}>
              <button>
                <BsSearch color="black" />
              </button>
            </Link>
          </div>
          <Link to="/products">
            <li className="liMenu">PRODUITS</li>
          </Link>

          <div className="flex flex-row liMenu">
            <Link to="/favoris">
              {favorites.length > 0 ? (
                <div className="flex flex-row">
                  <BsHeartFill className=" text-2xl" />
                  <p className="text-black ml-2">{favorites.length}</p>
                </div>
              ) : (
                <BsHeart className=" text-2xl" />
              )}
            </Link>
          </div>

          <Link to="/monpanier">
            <li className="liMenu">
              {cartItems.length > 0 ? (
                <div className="flex flex-row">
                  <BsCartCheck className="text-2xl" />
                  <p className="text-black ml-2">
                    {arrayOfQty.length > 0 && qty}
                  </p>
                </div>
              ) : (
                <BsCart className="text-2xl" />
              )}
            </li>
          </Link>
          {isAuthenticated && tokenObj.role === "0" && (
            <div className="flex flex-row liMenu">
              <Link to="/moncompte">
                <li className="text-black ml-2">MON COMPTE</li>
              </Link>
            </div>
          )}

          {isAuthenticated && tokenObj.role === "1" && (
            <div className="flex flex-row">
              <Link to="/admin/dashboard">
                <li className="liMenu">DASHBOARD</li>
              </Link>{" "}
            </div>
          )}

          {isAuthenticated ? (
            <div className="flex flex-row liMenu">
              <li className="text-black ml-2" onClick={() => logout()}>
                DECONNEXION
              </li>
            </div>
          ) : (
            <Link to="/connexion">
              <li className="liMenu">MON COMPTE</li>
            </Link>
          )}
        </ul>
      </div>
      {showMenu && (
        <ul className="ulMenuResponsive ">
          <div className="searchBarResponsive">
            <input
              className="searchAreaRersponsive"
              value={result}
              onChange={handleSearch}
              type="text"
              placeholder="Rechercher un produit ..."
            />
            <Link to={`/search/${result}`}>
              <button className="flex justify-center">
                <BsSearch color="black" />
              </button>
            </Link>
          </div>
          <Link to="/products">
            <li className="liMenu">PRODUITS</li>
          </Link>

          <Link to="/favoris">
            <li className="liMenu">FAVORIS</li>
          </Link>

          <Link to="/monpanier">
            <li className="liMenu">PANIER</li>
          </Link>
          {isAuthenticated && tokenObj.role === "0" && (
            <Link to="/moncompte">
              <li className="liMenu">MON COMPTE</li>
            </Link>
          )}

          {isAuthenticated && tokenObj.role === "1" && (
            <div className="flex flex-row">
              <Link to="/admin/dashboard">
                <li className="liMenu">DASHBOARD</li>
              </Link>{" "}
            </div>
          )}

          {isAuthenticated ? (
            <li className="liMenu" onClick={() => logout()}>
              DECONNEXION
            </li>
          ) : (
            <Link to="/connexion">
              <li className="liMenu">MON COMPTE</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
