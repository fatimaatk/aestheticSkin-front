import { useContext, useState, useEffect } from "react";
import { UserContext } from "./../../../contexts/UserContext";
import axios from "axios";
import EditFirstname from "./EditFirstname";
import EditLastname from "./EditLastname";
import EditAdresse from "./EditAdresse";
import EditCodePostal from "./EditCodePostal";
import EditVille from "./EditVille";

const EditAccount = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  const getUserInfo = async () => {
    axios
      .get(`http://localhost:8000/user/infos/${user.id}`)
      .then((response) => {
        setUserData(response.data);
      });
  };
  useEffect(() => {
    getUserInfo();
  }, [user.id]);

  return (
    <div className=" justify-around pb-5 pt-2 px-5">
      <dl className="shadow mx-2">
        <EditFirstname firstname={userData.firstname} />
        <EditLastname lastname={userData.lastname} />
        <EditAdresse adresse={userData.adresse} />
        <EditCodePostal codePostal={userData.codePostal} />
        <EditVille ville={userData.ville} />
      </dl>
    </div>
  );
};

export default EditAccount;
