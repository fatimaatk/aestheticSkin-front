import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./../styles/footer.css";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="newsglobal">
        <div className="newsletter">
          <div className="logoFooter ">
            <h1 className="text-5xl">Aēsthetic </h1>

            <h1 className="text-sm text-right">SKIN</h1>
          </div>
        </div>

        <div className="footer2">
          <p className="mt-1">Mentions légales</p>
          <p>Politiques de confidentialité</p>
          <p>CGV</p>
        </div>
      </div>
      <div className="footer3">
        <div className="textfooter3">
          <p>Tous droits réservés - Fatima Ait Khelifa</p>
          <p className="text-xs mt-2">Site marchand fictif</p>
        </div>
        <div className="iconefooter">
          <BsInstagram />
          <BsTwitter />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
