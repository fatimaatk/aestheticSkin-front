import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { RiFileUserLine } from "react-icons/ri";

export const ProgressBarCart = (props) => {
  const { progress } = props;

  return (
    <div className="flex justify-center ">
      <div className="w-full bg-gray-200 rounded-full w-1/4 mt-10 mb-6">
        <div
          className={`bg-pink-600 text-xl font-medium text-stone-100 text-center p-2 leading-none rounded-l-full flex justify-center ${progress}`}
          style={{ width: "33%" }}
        >
          Etape 1/3
        </div>
      </div>
    </div>
  );
};
export const ProgressBarInfo = (props) => {
  const { progress } = props;

  return (
    <div className="flex justify-center ">
      <div className="w-full bg-gray-200 rounded-full w-1/4 mt-10 mb-6">
        <div
          className={`bg-pink-600 text-xl font-medium text-stone-100 text-center p-2 leading-none rounded-l-full flex justify-center ${progress}`}
          style={{ width: "66%" }}
        >
          Etape 2/3
        </div>
      </div>
    </div>
  );
};
