import { useState } from 'react';
import axios from 'axios';


const url = 'http://localhost:8000/security/register';
const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && email && password) {
      const newUser = { firstname: firstname, lastname:lastname, email: email, password: password };
      axios.post(url, newUser).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          setError('');
          setFirstname('');
          setLastname('');
          setEmail('');
          setPassword('');
        }
        e.target.reset();
        setResult(true);
      });
    } else setError('All fields are required');
  };



  console.log(error);
  return (
    <div className="register-block">
      <div className="register">
        <h2 className="register-h2 mt-1 text-center w-full z-10 font-semibold">
          INSCRIPTION
        </h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {error && <p className="register-error">{error}</p>}
          <div className="form-group">
         
              <label className="label my-2 pt-1" htmlFor="prenom">
              Prénom
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="prenom"
              id="prenom"
              value={firstname}
      
              required="required"
              onChange={(e) => setFirstname(e.target.value)}
            />
             <label className="label my-2 pt-1" htmlFor="nom">
              Nom
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="nom"
              id="nom"
              value={lastname}
      
              required="required"
              onChange={(e) => setLastname(e.target.value)}
            />
            <label className="label my-2 pt-1" htmlFor="email">
              Email
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="text"
              name="email"
              id="email"
              value={email}
      
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-form-group">
            <label className="label my-3 pt-1 mt-6" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="inputForm appearance-none block w-full   py-1 leading-tight focus:outline-none"
              type="password"
              name="password"
              id="password"
              value={password}
       
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
             className="login-button text-white bg-black hover:bg-gray-100 text-black font-medium py-1 px-4 mt-4 mb-3 w-60"
              type="submit"
              value="Send"
            >
              M&apos;inscrire
            </button>
          </div>
      { result ? <p>Votre inscription a bien été prise en compte.</p> : null}
        </form>
      </div>
    </div>
  );
};

export default Register;
