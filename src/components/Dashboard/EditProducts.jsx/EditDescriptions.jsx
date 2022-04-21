import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

const EditDescriptions = ({ product }) => {
  const [description, setDescription] = useState([]);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);

  const handleSubmit = async () => {
    const update = { description: description };
    await axios
      .put(`http://localhost:8000/description/${product.id}`, update)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
        }
      });
  };

  return (
    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex items-center">
      <dt className="text-l font-medium text-gray-500 ">Description</dt>
      <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
        <div className="flex justify-around p-2">
          <div className="w-full">
            <div className="flex justify-around flex-col border border-solid p-4">
              <p className="">{product.description}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={edit ? "flex mt-4" : "hidden"}>
                <textarea
                  className="w-full border border-solid border-gray-400 py-2 px-4 text-gray-700"
                  type="text"
                  placeholder="Modifier la description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button className="bg-transparent  text-gray-600 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
          <div className="p-2 flex justify-end ml-2">
            <FiEdit2 onClick={() => setEdit(!edit)} />
          </div>
        </div>
      </dd>
    </div>
  );
};

export default EditDescriptions;
