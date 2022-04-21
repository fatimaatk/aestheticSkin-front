import axios from "axios";
import React, { useState } from "react";

const EditImages = ({ product }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(false);

  const handleChangeFile = (e) => {
    setSelectedFile(e.target.files);
  };

  console.log(selectedFile);

  const handleUploadFile = (e) => {
    const update = { image4: selectedFile };
    axios
      .put(`http://localhost:8000/change_image/image4/${product.id}`, update)
      .then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setResult(true);
        }
      });
  };

  return (
    <div>
      {" "}
      <input type="file" onChange={handleChangeFile} />
      <button onClick={handleUploadFile}>Télécharger</button>
    </div>
  );
};

export default EditImages;
