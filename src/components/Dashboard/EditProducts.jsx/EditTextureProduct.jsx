import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

const EditTextureProduct = ({ product }) => {
  const [textures, setTextures] = useState([]);
  const [idTexture, setIdTexture] = useState([]);
  const [setError] = useState("");
  const [result, setResult] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getTexture();
  }, []);

  const handleSubmit = async () => {
    const update = { texture_id: idTexture };
    await axios
      .put(`http://localhost:8000/textures/${product.id}`, update)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
        }
      });
  };

  const getTexture = () => {
    axios.get(`http://localhost:8000/textures`).then((response) => {
      setTextures(response.data);
    });
  };

  return (
    <div className="bg-neutral-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex items-center">
      <dt className="text-l font-medium text-gray-500 ">Texture</dt>
      <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
        <div className="flex justify-around p-2">
          <div className="w-full ">
            <div className="bg-white flex justify-around flex-col border border-solid p-4">
              <p className=""> {product.texture_title}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={edit ? "flex mt-4" : "hidden"}>
                <select
                  className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  onChange={(e) => setIdTexture(e.target.value)}
                  value={idTexture}
                  multiple={true}
                >
                  {textures.map((texture, i) => (
                    <option key={i} value={texture.id}>
                      {texture.texture_title}
                    </option>
                  ))}
                </select>

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

export default EditTextureProduct;
