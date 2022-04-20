import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

const EditTitleProduct = ({ product }) => {
  const [title, setTitle] = useState([]);
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);

  console.log(title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = { title: title };
    await axios
      .put(`http://localhost:8000/products/${product.id}`, update)
      .then(({ data }) => {
        console.log(data);
        if (data.error) setError(data.error);
        else {
          setResult(true);
          e.target.reset();
          console.log("ok", result);
        }
      });
  };
  return (
    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-l font-medium text-gray-500 ">Titre</dt>
      <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
        <div className="flex justify-around">
          {product.title}

          <FiEdit2 />
          <form onSubmit={handleSubmit}>
            <input
              className=" border border-solid border-gray-400 py-2 px-4 text-gray-700 "
              id="lastname"
              type="text"
              placeholder="Nom"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-transparent  text-gray-600 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Enregistrer
            </button>
          </form>
        </div>
      </dd>
    </div>
  );
};

export default EditTitleProduct;
