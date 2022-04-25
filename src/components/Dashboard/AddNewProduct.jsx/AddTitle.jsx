import React from "react";

const AddTitle = ({setTitle}) => {
  return (
    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
      <label
        htmlFor="name"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Nom du produit
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="mt-3 border border-gray-300 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        onChange={(e) => setTitle(e.target.value) }
      />
    </div>
  );
};

export default AddTitle;
