import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="newsglobal">
          <div className="newsletter">
            <h1 className="text-3xl">Newsletter</h1>
            <p className="mt-1">
              Restez au courant des dernières nouveautés et profitez de codes
              promotionnels avantageux.
            </p>
            <div className="newsletter2">
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Votre email"
              />
              <button
                className="bg-transparent  text-gray-600 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() =>
                  alert(
                    "La souscription n'est pas possible. Ceci est un site fictif."
                  )
                }
              >
                Souscrire
              </button>
            </div>
          </div>

          <div className="footer2">
            <h2 className="text-xl">En savoir plus</h2>
            <p className="mt-1">Mentions légales</p>
            <p>Politiques de confidentialité</p>
            <p>CGV</p>
          </div>
        </div>
        <div className="footer3">
          <div className="textfooter3">
            <p>Tous droits réservés - Fatima Ait Khelifa</p>
            <p>Site marchand fictif -WildCodeSchool</p>
          </div>
          <div className="iconefooter">
            <BsInstagram />
            <BsTwitter />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
