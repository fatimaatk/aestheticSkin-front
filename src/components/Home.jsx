import { Link } from "react-router-dom";
import creme0 from "../assets/creme0.jpeg";
import brand3 from "../assets/brand3.jpeg";
import Header from "./Hearder";

export const Home = () => {
  return (
    <div className="text-center">
      <Header />
      <div className="part2 mt-5 mb-3">
        <h2>
          TOUS NOS PRODUITS SONT FABRIQUÉS EN FRANCE, ET NON TESTÉS SUR LES
          ANIMAUX.
        </h2>
        <div className=" mt-5 w-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-end items-center ml-32 mr-10">
              <p className="text-4xl">CREME HYDRATANTE</p>
              <p className="mb-3 mt-3">
                NOTRE CREME QUI CIBLE LA COUCHE EXTERNE <br />
                DE LA PEAU ET LUI APPORTE CE DONT ELLE A BESOIN.
              </p>
              <Link to="/products/1">
                <button className="buttonSite bg-black text-white font-bold py-2 px-4  inline-flex items-center ">
                  DECOUVRIR
                </button>
              </Link>
            </div>
            <img className="w-2/4" src={creme0} alt="marque" />
          </div>
        </div>
      </div>
      <div className="part2 mt-5 mb-3">
        <h2>
          PARTAGEZ VOTRE EXPERIENCE AESTHETIC SKIN AVEC L’ENSEMBLE DE LA
          COMMUNAUTÉ.
        </h2>
        <div className=" mt-5 w-full">
          <div className="flex justify-around items-center">
            <img className="w-1/4" src={brand3} alt="marque" />
            <div className="flex flex-col justify-end items-center mr-32 ml-10">
              <p className="text-4xl">TONIC</p>
              <p className="mb-3 mt-3">
                
“J’ai vu une nette amélioration de ma peau après <br/>seulement quelques jours d’utilisations.<br/>
Mon coup de coeur est le sérum pour les yeux, <br/>une véritable pépite...”
              </p>
              <Link to="/products">
                <button className="buttonSite bg-black text-white font-bold py-2 px-4  inline-flex items-center ">
                  LIRE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
