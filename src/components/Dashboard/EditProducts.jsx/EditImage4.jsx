import React, { useState } from "react";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";

const EditImage4 = ({ id, image }) => {
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);
  const [newImage, setNewImage] = useState(null);

  const formData = new FormData();
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const handleNewImage = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmitNewImage = (e) => {
    e.preventDefault();
    if (newImage) {
      formData.append("image4", newImage);
      axios
        .put(
          `http://localhost:8000/images/update/image4/${id}`,
          formData,
          config
        )
        .then(({ data }) => {
          if (data.error) setError(data.error);
          else {
            setError("");
            setNewImage("");
          }
        })
        .then(() => window.location.reload());
    } else setError("Tous les champs sont requis");
  };

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:8000/images/delete/image4/${id}`)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
          window.location.reload();
        }
      });
  };

  return (
    <div className="bg-neutral-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex items-center">
      <dt className="text-l font-medium text-gray-500 ">Image 4</dt>
      <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
        <div className="flex justify-around p-2">
          <div className="w-full">
            <div className="flex justify-center">
              {image === null ? (
                <form
                  onSubmit={handleSubmitNewImage}
                  encType="multipart/form-data"
                >
                  <input
                    type="file"
                    name="image4"
                    id="image"
                    onChange={handleNewImage}
                    className=""
                  />
                  <button type="submit" value="Send">
                    Ajouter
                  </button>
                </form>
              ) : (
                <img
                  className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src={image}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="p-2 flex justify-end ml-2">
            {image !== null && (
              <RiDeleteBinLine type="button" onClick={handleSubmit} />
            )}
          </div>
        </div>
      </dd>
    </div>
  );
};

export default EditImage4;
