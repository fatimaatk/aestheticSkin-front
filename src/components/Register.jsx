import { useState } from "react";
import axios from "axios";
import "../styles/connection.css";

const url = "http://localhost:8000/security/register";
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstname &&
      lastname &&
      email &&
      password &&
      adresse &&
      codePostal &&
      ville
    ) {
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        adresse: adresse,
        codePostal: codePostal,
        ville: ville,
      };
      axios.post(url, newUser).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setError("");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          setAdresse("");
          setCodePostal("");
          setVille("");
        }
        e.target.reset();
        setResult(true);
        setTimeout(() => {
          window.location.href = "/connexion";
        }, 2000);
      });
    } else setError("Merci de renseigner tous les champs.");
  };

  return (
    <div className="connection flex flex-col mt-4 mb-5">
      <div className="loginDiv register border p-10  w-1/5">
        <h2 className="register-h2 mt-1 text-center w-full z-10 font-semibold">
          INSCRIPTION
        </h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {error && <p className="register-error">{error}</p>}
          <div className="form-group">
            <label className="label my-2 pt-1" htmlFor="prenom">
              Prénom
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="prenom"
              id="prenom"
              value={firstname}
              required="required"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label className="label my-2 pt-1" htmlFor="nom">
              Nom
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="nom"
              id="nom"
              value={lastname}
              required="required"
              onChange={(e) => setLastname(e.target.value)}
            />
            <label className="label my-2 pt-1" htmlFor="email">
              Email
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="email"
              id="email"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label my-3 pt-1 mt-6" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="password"
              name="password"
              id="password"
              value={password}
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="label my-2 pt-1" htmlFor="email">
              Adresse
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="adresse"
              id="adresse"
              value={adresse}
              required="required"
              onChange={(e) => setAdresse(e.target.value)}
            />
            <label className="label my-2 pt-1" htmlFor="email">
              Code postal
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="codePostal"
              id="codePostal"
              value={codePostal}
              required="required"
              onChange={(e) => setCodePostal(e.target.value)}
            />
            <label className="label my-2 pt-1" htmlFor="email">
              Ville
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="ville"
              id="ville"
              value={ville}
              required="required"
              onChange={(e) => setVille(e.target.value)}
            />
          </div>
          <div className="register-form-group">
            <button
              className="login-button text-white bg-black hover:bg-gray-100 text-black font-medium py-1 px-4 mt-4 mb-3 w-80"
              type="submit"
              value="Send"
            >
              M&apos;inscrire
            </button>
          </div>
          {result && (
            <p className="text-center font-bold">
              Votre inscription a bien été prise en compte. <br /> Vous allez
              être redirigé vers la page de connexion.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
