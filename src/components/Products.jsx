import { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";

import ProductCard from "./ProductCard";

import "./../styles/products.css";

// import Filter from "./Filter";

const Products = () => {
 
  const { products } = useContext(ProductContext);
  
 
  return (
    <div className="mainProducts">
      <div className="filter">
        <h1 className="font-bold p-3 text-xl">FILTRES </h1> 
        <ul className="filtercategorie mt-4">
          <h2 className="font-bold text-lg">CATEGORIES</h2>
          <li>VISAGE ET COU</li>
          <li>CONTOUR DES YEUX</li>
          <li>MAINS</li>
        </ul>
        <ul className="filtercategorie">
          <h2 className="font-bold text-lg">TEXTURE</h2>
          <li>CREME</li>
          <li>SERUM</li>
          <li>LOTION</li>
        </ul>
          </div>
        <div className="productsList grid grid-rows-2 grid-flow-col gap-2 ml-6">
          {products
            ? products.map((product) => (
              // 
                <ProductCard key={product.id} product={product}/>
                //</Link>
              ))
            : "Loading ..."}
        
        </div>
    </div>
  );
};

export default Products;
