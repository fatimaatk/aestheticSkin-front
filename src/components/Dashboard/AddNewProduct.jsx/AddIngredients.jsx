import React from "react";

const AddIngredients = ({setIngredients}) => {
  return (
    <div>
      <label
        htmlFor="Description"
        className="block text-sm font-medium font-bold text-gray-700"
      >
        Ingredients
      </label>
      <div className="mt-1">
        <textarea
          id="ingredient"
          name="ingredient"
          rows={3}
          className="mt-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 px-2 py-2 rounded-md"
          placeholder="Ingrédients du produit"
          defaultValue={""}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddIngredients;
