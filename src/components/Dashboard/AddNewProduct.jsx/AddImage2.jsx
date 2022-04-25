import React from "react";

const AddImage2 = ({ handleImage2}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor="logo"
          className="block text-sm font-medium font-bold text-gray-700"
        >
          Image 2
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="file"
            name="image2"
            id="image2"
            onChange={handleImage2}
            className="mt-3 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AddImage2;
