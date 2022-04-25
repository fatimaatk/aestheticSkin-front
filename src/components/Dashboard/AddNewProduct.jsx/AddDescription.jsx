import React from "react";

const AddDescription = ({ setDescription }) => {
  return (
    <div>
      <label
        htmlFor="Description"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Description
      </label>
      <div className="mt-1">
        <textarea
          id="description"
          name="description"
          rows={3}
          className="mt-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 px-2 py-2 rounded-md"
          placeholder="Description du produit"
          defaultValue={""}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddDescription;
