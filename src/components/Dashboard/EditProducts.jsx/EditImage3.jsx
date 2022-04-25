import React, { useState } from "react";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";

const EditImage3 = ({ id, image }) => {
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
      formData.append("image3", newImage);
      axios
        .put(
          `http://localhost:8000/images/update/image3/${id}`,
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
      .put(`http://localhost:8000/images/delete/image3/${id}`)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
          window.location.reload();
        }
      });
  };

  return (
    <div className="h-1/4 bg-neutral-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex items-center">
      <dt className="text-l font-medium text-gray-500 ">Image 3</dt>
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
                  className="w-full md:h-auto object-cover md:w-2/6"
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

export default EditImage3;
