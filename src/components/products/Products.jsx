import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "./../../styles/products.css";
import { AiOutlineFilter, AiFillFilter } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Store/ProductsSlice";

const Products = () => {
  const [category, setCategory] = useState([]);
  const [texture, setTexture] = useState();
  const [categoryIsSelected, setCategoryIsSelected] = useState({});
  const [textureIsSelected, setTextureIsSelected] = useState({});
  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    products.length === 0 && dispatch(getProducts());
  }, []);

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

  return (
    <div className="mainProducts">
      <div className="filter">
        <div className="filterDiv flex items-center gap-20">
          <h1 className="pl-8 text-xl">FILTRES </h1>

          {showFilter ? (
            <AiFillFilter
              className="filteredButton text-2xl"
              type="button"
              onClick={() => setShowFilter(!showFilter)}
            />
          ) : (
            <AiOutlineFilter
              className="filteredButton text-2xl"
              type="button"
              onClick={() => setShowFilter(!showFilter)}
            />
          )}
        </div>
        {showFilter && (
          <div className="filterMenu mb-5">
            <ul className="filtercategorieResponsive ">
              <h2 className="font-bold text-lg">CATEGORIES</h2>
              {category
                ? category.map((category, i) => (
                    <div
                      className="flex items-center justify-between w-48"
                      key={i}
                    >
                      <label className="uppercase">
                        {category.category_title}
                      </label>
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
            <div className="filtercategorieResponsive mt-2">
              <h2 className="font-bold text-lg">TEXTURE</h2>
              {texture
                ? texture.map((texture, i) => (
                    <div
                      className="flex items-center justify-between w-48"
                      key={i}
                    >
                      <label className="uppercase">
                        {texture.texture_title}
                      </label>
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
        )}

        <ul className="filtercategorie mt-20">
          <h2 className="font-bold text-lg">CATEGORIES</h2>
          {category
            ? category.map((category, i) => (
                <div className="flex items-center justify-between" key={i}>
                  <label className="uppercase">{category.category_title}</label>
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
                  <label className="uppercase">{texture.texture_title}</label>
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
      <div className="productListMain">
        <div className="flex justify-center flex-col">
          <div className="ml-24 mr-36 mb-10 flex justify-between">
            <h1 className="text-2xl font-bold">TOUS LES PRODUITS</h1>
          </div>

          <div
            className="productsList 

           "
          >
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
              : arrayTexture.includes(true) && arrayCategory.includes(true)
              ? products
                  .filter(
                    (product) =>
                      textureIsSelected[product.texture_id] &&
                      categoryIsSelected[product.category_id]
                  )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;