import React, { useState } from "react";
import axios from "axios";
import NavDashboard from "./NavDashboard";
import AddImage1 from "./AddNewProduct.jsx/AddImage1";
import AddImage2 from "./AddNewProduct.jsx/AddImage2";
import AddImage3 from "./AddNewProduct.jsx/AddImage3";
import AddTitle from "./AddNewProduct.jsx/AddTitle";
import AddPrice from "./AddNewProduct.jsx/AddPrice";
import AddCategory from "./AddNewProduct.jsx/AddCategory";
import AddTexture from "./AddNewProduct.jsx/AddTexture";
import AddDescription from "./AddNewProduct.jsx/AddDescription";
import AddIngredients from "./AddNewProduct.jsx/AddIngredients";
import AddContenance from "./AddNewProduct.jsx/AddContenance";
import AddMessageError from "./AddNewProduct.jsx/AddMessageError";
import AddSuccessMessage from "./AddNewProduct.jsx/AddSuccessMessage";

const DashboardAddNew = () => {
  const [title, setTitle] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [texture, setTexture] = useState([]);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [contenance, setContenance] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formData = new FormData();
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const handleImage1 = (e) => {
    setImage1(e.target.files[0]);
  };
  const handleImage2 = (e) => {
    setImage2(e.target.files[0]);
  };
  const handleImage3 = (e) => {
    setImage3(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title &&
      image1 &&
      image2 &&
      image3 &&
      price &&
      category &&
      texture &&
      description &&
      ingredients &&
      contenance
    ) {
      formData.append("title", title);
      formData.append("images", image1);
      formData.append("images", image2);
      formData.append("images", image3);
      formData.append("price", price);
      formData.append("category_id", category);
      formData.append("texture_id", texture);
      formData.append("description", description);
      formData.append("ingredients", ingredients);
      formData.append("contenance", contenance);
      axios
        .post("http://localhost:8000/products/newproduct", formData, config)
        .then(({ data }) => {
          if (data.error) setError(data.error);
          else {
            setError("");
            setTitle("");
            setImage1("");
            setImage2("");
            setImage3("");
            setPrice("");
            setCategory("");
            setTexture("");
            setDescription("");
            setIngredients("");
            setContenance("");
            setMessage("Le produit a été ajoutée à jour avec succès !");
          }
        });
    } else setError("Tous les champs sont requis.");
  };

  return (
    <section className="admin items-stretch relative">
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <div className="h-full w-full relative overflow-y-auto lg:ml-64">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="px-5 py-5 md:mt-0 md:col-span-2">
            <h3 className="mb-5 text-lg font-medium leading-6 text-gray-900">
              Ajouter un nouveau produit
            </h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <AddTitle setTitle={setTitle} />
                  <AddImage1 handleImage1={handleImage1} />
                  <AddImage2 handleImage2={handleImage2} />
                  <AddImage3 handleImage3={handleImage3} />
                  <AddPrice setPrice={setPrice} />
                  <AddCategory setCategory={setCategory} category={category} />
                  <AddTexture setTexture={setTexture} texture={texture} />
                  <AddDescription setDescription={setDescription} />
                  <AddIngredients setIngredients={setIngredients} />
                  <AddContenance setContenance={setContenance} />
                </div>
                <div className="pb-4 bg-white text-right sm:px-6">
                  {error && <AddMessageError error={error} />}
                  {message && <AddSuccessMessage message={message} />}
                  <button
                    type="submit"
                    value="Send"
                    className="inline-block px-6 py-2.5 bg-neutral-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardAddNew;
