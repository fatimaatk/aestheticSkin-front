import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { IoRadioButtonOff } from "react-icons/io";
import "./../styles/products.css";

// import Filter from "./Filter";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [texture, setTexture] = useState();
  const [toggleCategories, setToggleCategories] = useState(false);


  const getProducts = () => {
    axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    });
  };

  const getCategories = () => {
    axios.get("http://localhost:8000/filter/categories").then((response) => {
      setCategory(response.data);
    });
  };

  const getTexture = () => {
    axios.get("http://localhost:8000/filter/textures").then((response) => {
      setTexture(response.data);
    });
  };

  useEffect(() => {
    getProducts();
    getCategories();
    getTexture();
  }, []);

 

  // const handleChangeCategory = (id) => {
  //   setProducts(products.filter((product) => product.category_id === id) && setToggleCategories(toggleCategories));
  // };

  const handleChangeTexture = (id) => {
    setProducts(products.filter((product) => product.texture_id === id)) && setToggleCategories(!toggleCategories);
  };

  const handleToggle = () => {
    setToggleCategories(!toggleCategories);
  };

  return (
    <div className="mainProducts">
      <div className="filter">
        <h1 className="font-bold p-3 text-xl">FILTRES </h1>
        <ul className="filtercategorie mt-4">
          <h2 className="font-bold text-lg">CATEGORIES</h2>
          {category
            ? category.map((e, i) => (
                <div className="flex items-center justify-between" key={i}>
                  <label className="uppercase">{e.title}</label>
                  <input
                    type="checkbox"
                    id="textures"
                    name="textures"
                    onClick={() => {
                      handleToggle();
                    }}
                  />
                </div>
              ))
            : null}
        </ul>
        <div className="filtercategorie mt-4">
          <h2 className="font-bold text-lg">TEXTURE</h2>
          {texture
            ? texture.map((e, i) => (
                <div className="flex items-center justify-between" key={i}>
                  <label className="uppercase">{e.title}</label>
                  <input
                    type="checkbox"
                    id="textures"
                    name="textures"
                    onChange={() => {
                      handleChangeTexture(e.id);
                    }}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="productsList grid grid-rows-2 grid-flow-col gap-2 ml-6">
        {products
          .filter((product)=> !toggleCategories || product.category_id === category.id)
          .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
         }
      </div>
    </div>
  );
};

export default Products;
