import React from "react";

const AddPrice = ({setPrice}) => {
  return (
    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
      <label
        htmlFor="name"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Prix
      </label>
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        name="price"
        id="price"
        placeholder="Prix du produit"
        className="mt-3 border border-gray-300 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
};
export default AddPrice;
