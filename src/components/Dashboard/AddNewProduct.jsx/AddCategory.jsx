import React, { useEffect, useState } from "react";
import axios from "axios";
const AddCategory = ({ setCategory, category }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios.get(`http://localhost:8000/categories`).then((response) => {
      setCategories(response.data);
    });
  };

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="price"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Categorie
      </label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category.id}
        multiple={true}
        className="mt-3 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {categories.map((category, i) => (
          <option key={i} value={category.id}>
            {category.category_title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddCategory;
