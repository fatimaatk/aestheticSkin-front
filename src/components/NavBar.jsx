import "./../styles/navbar.css";
import { Link } from "react-router-dom";
import { BsCart, BsCartCheck, BsHeart } from "react-icons/bs";

const NavBar = (props) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const token = localStorage.getItem("token");

  const { cartItems } = props;

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
        <ul className="ulMenu cursor-pointer">
          <Link to="/products">
            <li className="liMenu">PRODUITS</li>
          </Link>
          {token ? (
            <div className="flex flex-row">
              <Link to="/moncompte">
                <li className="text-black ml-2">MON COMPTE</li>
              </Link>
            </div>
          ) : null}
        
            <div className="flex flex-row">
              <Link to="/favoris">
              < BsHeart className="text-2xl" />
            </Link>
            </div>
        
          <Link to="/monpanier">
            <li className="liMenu">
              {cartItems.length > 0 ? (
                <div className="flex flex-row">
                  <BsCartCheck className="text-2xl" />
                  <p className="text-black ml-2">{cartItems.length}</p>
                </div>
              ) : (
                <BsCart className="text-2xl" />
              )}
            </li>
          </Link>

          {token ? (
            <div className="flex flex-row">
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
    </div>
  );
};

export default NavBar;
