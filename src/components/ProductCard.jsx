import './../styles/productcard.css';
import { BsHeart } from 'react-icons/bs';
const ProductCard = ({product}) => {

  console.log(product)

  return (
    <div className='productCard w-60'>
      <img src={product.image1} alt={product.title} className="w-60"/>
      <div className='productCardInfos'>
        <div className='productCardDetails'>
      <p className='text-xs font-light	text-slate-500'>{product.category}</p>
      <h1 className=''>{product.title}</h1>
      <p>{product.price}</p>
      </div>
      <BsHeart className='m-1 font-medium'/>
      </div>
      </div>
  )
}

export default ProductCard;