import React from "react";

const AddImage3 = ({handleImage3}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor="logo"
          className="block text-sm font-medium font-bold text-gray-700"
        >
          Image 3
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="file"
            name="image3"
            id="image3"
            onChange={handleImage3}
            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AddImage3;
