import React from "react";

const Tri = () => {
  return (
    <div class="flex justify-center">
      <div class="mb-3 xl:w-96">
        <select
          class="form-select appearance-none
      block
      w-80
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
        >
          <option selected>Trier par </option>
          <option value="1">Du mois cher au plus cher</option>
          <option value="2">Du plus cher au mois cher</option>
          <option value="3">Meilleure note</option>
        </select>
      </div>
    </div>
  );
};

export default Tri;
