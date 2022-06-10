import { useContext, useState, useEffect } from "react";

import { UserContext } from "../contexts/UserContext";
import axios from "axios";
const MonCompte = () => {
  const [data, setData] = useState([]);

  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="text-center">
      {/* { result ? <p>Les modifications ont bien été prises en compte.</p> : null} */}
    </div>
  );
};

export default MonCompte;
