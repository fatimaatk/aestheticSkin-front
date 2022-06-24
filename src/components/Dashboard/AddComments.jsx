import React from "react";
import { useState } from "react";

const AddComments = () => {
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("rate", rate);
  console.log("comment", comment);
  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenter"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
            <div className="flex flex-col">
              <p>Vous avez testé ce produit, laissez nous vos impressions.</p>
            </div>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body relative p-4">
            <div class="block rounded-lg lg bg-white max-w-md">
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-6">
                  <label>Note :</label>
                  <select onChange={(e) => setRate(e.target.value)}>
                    <option value={5}>5/5</option>
                    <option value={4}>4/5</option>
                    <option value={3}>3/5</option>
                    <option value={2}>2/5</option>
                    <option value={1}>1/5</option>
                    <option value={0}>0/5</option>
                  </select>
                </div>
                <div class="form-group mb-6">
                  <label>Commentaires :</label>
                  <textarea
                    onChange={(e) => setComment(e.target.value)}
                    class="
                  form-control
        block
        w-full
        5
        text-base
        font-normal
        text-gray-700
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-neutral-600 focus:outline-none
        "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5  text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-neutral-200 border hover:shadow-lg focus:bg-neutral-400  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400  active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-neutral-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComments;
