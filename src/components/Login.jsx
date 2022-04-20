import { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import Cookies from "js-cookie";

const Login = () => {
  const url = "http://localhost:8000/security/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email: email, password: password };
      axios.post(url, user).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          Cookies.set("token", JSON.stringify(data));
          window.location.href = "/";
        }
      });
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <div className="login-block">
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
      </div>
    </div>
  );
};

export default Login;
