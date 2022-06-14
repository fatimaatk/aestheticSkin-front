import { Link } from "react-router-dom";
import Login from "./Login";
import "../styles/connection.css";

const Connection = () => {
  return (
    <div>
      <div className="connection flex flex-col">
        {/* <Register /> */}
        <Login />
        <span>Vous n'avez pas encore de compte ? </span>
        <Link to="/register">Rejoignez-nous !</Link>
      </div>
    </div>
  );
};

export default Connection;
