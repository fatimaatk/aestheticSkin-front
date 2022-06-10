import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

const EditCodePostal = ({ codePostal }) => {
  const { user } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [code, setCode] = useState([]);
  const [error, setError] = useState([]);

  const handleSubmit = async () => {
    const update = { codePostal: code };
    await axios
      .put(`http://localhost:8000/user/update/codePostal/${user.id}`, update)
      .then(({ data }) => {
        if (data.error) {
          setError(data.error);
        }
      });
  };

  return (
    <div className="bg-neutral-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex items-center h-1/5">
      <dt className="text-l font-medium text-gray-500 "> CODE POSTAL : </dt>
      <dd className="mt-1 text-l text-gray-900 sm:mt-0 sm:col-span-2 ">
        <div className="flex justify-around p-2 ">
          <div className="w-full">
            <div className="flex justify-around flex-col p-4">
              <p className="">{codePostal}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={edit ? "flex mt-4" : "hidden"}>
                <textarea
                  className="w-full h-full border border-solid border-gray-400 py-2 px-4 text-gray-700"
                  type="text"
                  placeholder="Modifier votre code postal"
                  onChange={(e) => setCode(e.target.value)}
                />
                <button className="bg-transparent  text-gray-600 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
          <div className="p-2 flex justify-end ml-2">
            <FiEdit2 onClick={() => setEdit(!edit)} />
          </div>
        </div>
      </dd>
    </div>
  );
};

export default EditCodePostal;
