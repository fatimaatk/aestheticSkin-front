import './../styles/header.css';
import brandCreme from '../assets/brandCreme.jpeg';
// import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link } from 'react-router-dom';

const Header = () => {


  return (
    <div className='header'>
      <div className="headerContent">
      <img className='headerImg' src={brandCreme} alt="marque" />
      <div className="headerText">
      <p className='text-4xl'>UNE ROUTINE MINIMALISTE</p>
      <p>POUR TOUTES LES PEAUX</p>
      <Link to='/products'>
      <button className="buttonSite bg-black text-white font-bold py-2 px-4  inline-flex items-center ">ACHETER</button>
      </Link>
      </div>
      </div>
      

    </div>
  )
}

export default Header;