import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import Cookies from "js-cookie";

const Login = () => {
  const url = "http://localhost:8000/security/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  //récupérer history

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email: email, password: password };
      axios.post(url, user).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          Cookies.set("token", JSON.stringify(data));
          if (location.pathname === "/monpanier/resume") {
            window.location.href = "/monpanier";
          } else if (location.pathname === "/connexion") {
            window.location.href = "/";
          } else if (location.pathname === "/monpanier/informations") {
            window.location.href = "/monpanier";
          } else if (location.pathname === "/monpanier/paiement") {
            window.location.href = "/monpanier";
          } else if (location.pathname.startsWith("/order")) {
            window.location.href = "/moncompte";
          }
        }
      });
    } else {
      setError(
        "Merci de bien vouloir entrer un email et un mot de passe valide."
      );
    }
  };

  return (
    <div className="loginDiv p-10 login-block">
      <h2 className="register-h2 mt-1 mb-2 text-center w-full z-10 font-semibold">
        CONNEXION
      </h2>
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="login-error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email" className="label my-2 pt-1">
              Adresse email
            </label>
            <input
              type="text"
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              name="email"
              id="email"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="label my-2 pt-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              name="password"
              id="password"
              value={password}
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="login-button text-white bg-black hover:bg-gray-100 text-black font-medium py-1 px-4 mt-4 mb-3 w-60"
          >
            Me connecter
          </button>
        </form>
        <div className="flex flex-col text-center mt-2">
          <span>Vous n'avez pas encore de compte ? </span>
          <Link to="/register" className="font-bold hover:underline ">
            Rejoignez-nous !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
