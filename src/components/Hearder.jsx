import "./../styles/header.css";
import brandCreme from "../assets/brandCreme.jpeg";
import brandCreme2 from "../assets/brandCreme2.jpeg";
// import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute hidden">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
           
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
         
          </button>
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className="headerContent">
              <img className="headerImg" src={brandCreme} alt="marque" />
              <div className="headerText">
                <p className="text-4xl">UNE ROUTINE MINIMALISTE</p>
                <p>POUR TOUTES LES PEAUX</p>
                <Link to="/products">
                  <button className="buttonSite bg-black text-white font-bold py-2 px-4  inline-flex items-center ">
                    ACHETER
                  </button>
                </Link>
              
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="headerContent">
              <img className="headerImg" src={brandCreme2} alt="marque" />
             

              <div className="headerText">
                <p className="text-4xl">DES PRODUITS ADAPTÉS</p>
                <p>À L'ENSEMBLE DE VOS BESOINS</p>
                <Link to="/products">
                  <button className="buttonSite bg-black text-white font-bold py-2 px-4  inline-flex items-center">
                    ACHETER
                  </button>
                </Link>
            
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
