import React from "react";

const AddContenance = ({setContenance}) => {
  return (
    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
      <label
        htmlFor="name"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Contenance
      </label>
      <input
        type="text"
        name="contenance"
        id="contenance"
        onChange={(e) => setContenance(e.target.value)}
        className="mt-3 border border-gray-300 px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
};

export default AddContenance;
