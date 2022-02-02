import Login from './Login';
import Register from './Register';
import '../styles/connection.css';

const Connection = () => {
  return (
    <div>
      <div className="connection">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default Connection;