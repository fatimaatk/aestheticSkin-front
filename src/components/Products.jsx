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

  const [categoryIsSelected, setCategoryIsSelected] = useState({});
  const [textureIsSelected, setTextureIsSelected] = useState({});

  useEffect(() => {
    const isCategorySelected = {};
    // //ici je récupère mes id de catégories & de textures
    const categoryNames = products.map((product) => product.category_id);
    //ici je récupère l'id de category correspondant à chaque produit
    categoryNames.forEach(
      (categoryName) => (isCategorySelected[categoryName] = false)
    );
    //ici je déclare si c'est sélectionné ou non
    setCategoryIsSelected(isCategorySelected);
  }, []);

  useEffect(() => {
    const isTextureSelected = {};
    // //ici je récupère mes id de catégories & de textures
    const textureNames = products.map((product) => product.texture_id);
    //ici je récupère l'id de category correspondant à chaque produit
    textureNames.forEach((textureName) =>
      textureName != null ? (isTextureSelected[textureName] = false) : ""
    );

    //ici je déclare si c'est sélectionné ou non
    setTextureIsSelected(isTextureSelected);
  }, []);

  console.log(textureIsSelected);
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

  const arrayCategory = [];

  for (let key in categoryIsSelected) {
    if (categoryIsSelected.hasOwnProperty(key)) {
      arrayCategory.push(categoryIsSelected[key]);
    }
  }

  const arrayTexture = [];

  for (let key in textureIsSelected) {
    if (textureIsSelected.hasOwnProperty(key)) {
      arrayTexture.push(textureIsSelected[key]);
    }
  }

  console.log(arrayTexture);

  const getProductsFiltered = (products) => {};

  return (
    <div className="mainProducts">
      <div className="filter">
        <h1 className="font-bold p-3 text-xl">FILTRES </h1>
        <ul className="filtercategorie mt-4">
          <h2 className="font-bold text-lg">CATEGORIES</h2>
          {category
            ? category.map((category, i) => (
                <div className="flex items-center justify-between" key={i}>
                  <label className="uppercase">{category.title}</label>
                  <input
                    type="checkbox"
                    id="textures"
                    name="textures"
                    onClick={() =>
                      setCategoryIsSelected({
                        ...categoryIsSelected,
                        [category.id]: !categoryIsSelected[category.id],
                      })
                    }
                  />
                </div>
              ))
            : null}
        </ul>
        <div className="filtercategorie mt-4">
          <h2 className="font-bold text-lg">TEXTURE</h2>
          {texture
            ? texture.map((texture, i) => (
                <div className="flex items-center justify-between" key={i}>
                  <label className="uppercase">{texture.title}</label>
                  <input
                    type="checkbox"
                    id="textures"
                    name="textures"
                    onClick={() =>
                      setTextureIsSelected({
                        ...textureIsSelected,
                        [texture.id]: !textureIsSelected[texture.id],
                      })
                    }
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="productsList grid grid-rows-2 grid-flow-col gap-2 ml-6">
        {arrayTexture.includes(true)
          ? products

              .filter((product) => textureIsSelected[product.texture_id])
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          : arrayCategory.includes(true)
          ? products
              .filter((product) => categoryIsSelected[product.category_id])
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          : arrayCategory.includes(true) && arrayTexture.includes(true)
          ? products
              .filter(
                (product) =>
                  categoryIsSelected[product.category_id] &&
                  textureIsSelected[product.texture_id]
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
