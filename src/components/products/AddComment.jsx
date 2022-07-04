import axios from "axios";
import React from "react";
import { useState } from "react";

const AddComment = ({ product, user }) => {
  const url = "http://localhost:8000/comments";
  const [rateId, setRateId] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((rateId, user, product.id, comment)) {
      const newComment = {
        rate_id: rateId,
        user_id: user,
        product_id: product.id,
        comment: comment,
      };
      axios.post(url, newComment).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setRateId("");
          setComment("");
        }
        e.target.reset();
        setResult("Merci pour votre avis.");
        setTimeout(() => {
          window.location.href = `/products/${product.id}`;
        }, 2000);
      });
    } else setError("*Merci de remplir l'ensemble des champs");
  };

  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Donnez votre avis
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body relative p-4">
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <label>Note</label>
                  <select
                    required
                    className="form-select appearance-none
      block
      w-full
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
                    onChange={(e) => setRateId(e.target.value)}
                  >
                    <option value="">Note</option>
                    <option value={5}>5/5</option>
                    <option value={4}>4/5</option>
                    <option value={3}>3/5</option>
                    <option value={2}>2/5</option>
                    <option value={1}>1/5</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <label>Commentaire</label>
                  <textarea
                    required="required"
                    onChange={(e) => setComment(e.target.value)}
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea1"
                    rows="10"
                    placeholder={`Votre avis sur ${product.title}`}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center ">
                {result && <p className="text-emerald-500">{result}</p>}
                {error && <p className="text-rose-800">{error}</p>}
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-white-600  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-neutral-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
