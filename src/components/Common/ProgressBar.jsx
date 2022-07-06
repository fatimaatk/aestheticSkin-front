import React from "react";
import "./../../styles/cartSummary.css";

export const ProgressBarCart = (props) => {
  const { progress } = props;

  return (
    <div className="flex justify-center ">
      <div className="progressBar bg-gray-200 rounded-full  mt-10 mb-6">
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
      <div className="progressBar bg-gray-200 rounded-full mt-10 mb-6">
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
export const ProgressBarConfirm = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-full bg-gray-200 rounded-full w-1/4 mt-10 mb-6">
        <div
          className={`bg-pink-600 text-xl font-medium text-stone-100 text-center p-2 leading-none rounded-full flex justify-center `}
          style={{ width: "100%" }}
        >
          Etape 3/3
        </div>
      </div>
    </div>
  );
};
