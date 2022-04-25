import React, { useState } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

const EditContenance = ({ product }) => {
  const [contenance, setContenance] = useState([]);
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = async () => {
    const update = { contenance: contenance };
    await axios
      .put(`http://localhost:8000/contenance/${product.id}`, update)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
        }
      });
  };

  return (
    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex items-center">
      <dt className="text-l font-medium text-gray-500 ">Contenance</dt>
      <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
        <div className="flex justify-around p-2">
          <div className="w-full ">
            <div className="bg-white flex justify-around flex-col border border-solid p-4">
              <p className="">{product.contenance}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={edit ? "flex mt-4" : "hidden"}>
                <input
                  className="w-full border border-solid border-gray-400 py-2 px-4 text-gray-700 "
                  type="text"
                  placeholder="Modifier la contenance"
                  onChange={(e) => setContenance(e.target.value)}
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

export default EditContenance;
