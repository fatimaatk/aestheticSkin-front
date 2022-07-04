import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductsResult = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [texture, setTexture] = useState();
  const [categoryIsSelected, setCategoryIsSelected] = useState({});
  const [textureIsSelected, setTextureIsSelected] = useState({});

  useEffect(() => {
    const isCategorySelected = {};
    const categoryNames = filteredData.map((product) => product.category_id);
    categoryNames.forEach(
      (categoryName) => (isCategorySelected[categoryName] = false)
    );
    setCategoryIsSelected(isCategorySelected);
  }, []);

  useEffect(() => {
    const isTextureSelected = {};
    const textureNames = filteredData.map((product) => product.texture_id);
    textureNames.forEach((textureName) =>
      textureName != null ? (isTextureSelected[textureName] = false) : ""
    );
    setTextureIsSelected(isTextureSelected);
  }, []);

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
  console.log(params.search);

  const filteredData = products.filter((value) => {
    return value.title.includes(params.search);
  });

  console.log("result");
  return (
    <div className="mainProducts">
      <div className="filter">
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
      <div className="productListMain ">
        <div className="flex justify-center flex-col">
          <div className="ml-24 mr-36 mb-10 flex item-center">
            <h1 className="text-2xl font-bold">
              RECHERCHE EN COURS : {params.search}
            </h1>
          </div>

          <div className="productsList  grid grid-rows-2 grid-flow-col gap-4">
            {arrayTexture.includes(true)
              ? filteredData
                  .filter((product) => textureIsSelected[product.texture_id])
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : arrayCategory.includes(true)
              ? filteredData
                  .filter((product) => categoryIsSelected[product.category_id])
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : arrayCategory.includes(true) && arrayTexture.includes(true)
              ? filteredData
                  .filter(
                    (product) =>
                      categoryIsSelected[product.category_id] &&
                      textureIsSelected[product.texture_id]
                  )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : arrayTexture.includes(true) && arrayCategory.includes(true)
              ? filteredData
                  .filter(
                    (product) =>
                      textureIsSelected[product.texture_id] &&
                      categoryIsSelected[product.category_id]
                  )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : filteredData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsResult;
