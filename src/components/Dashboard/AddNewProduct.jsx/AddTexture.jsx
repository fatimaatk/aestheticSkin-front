import React, { useEffect, useState } from "react";
import axios from "axios";

const AddTexture = ({setTexture, texture}) => {
    const [textures, setTextures] = useState([]);
      const getTexture = () => {
        axios.get(`http://localhost:8000/textures`).then((response) => {
          setTextures(response.data);
        });
      };
       useEffect(() => {
         getTexture();
       }, []);
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="price"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Texture
      </label>
      <select
        id="price"
        name="price"
        className="mt-3 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e) => setTexture(e.target.value)}
        multiple={true}
        value={texture}
      >
        {textures.map((texture, i) => (
          <option key={i} value={texture.id}>
            {texture.texture_title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddTexture;
