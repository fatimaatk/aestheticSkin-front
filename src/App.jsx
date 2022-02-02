import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import ProductContext from "./contexts/ProductsContext.js";

import { Home } from './components/Home.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';
import { DashboardAdmin } from './components/DashboardAdmin.jsx';
import { AuthContext } from "./contexts/AuthContext.js";
import { UserContext } from "./contexts/UserContext.js";
import { ProtectedRoute } from "./protected/ProtectedRoute.js";
import NavBar from "./components/NavBar.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get('http://localhost:8000/products')
    .then(response => {
        setProducts(response.data)
    })
}

console.log(products)

  useEffect(() => {
    getProducts();
    const token = localStorage.getItem("token");
    if (token) {
      axios.get('http://localhost:8000/security/user-is-auth', {
        headers: {
          "x-access-token": token
        }
      }).then(({ data }) => {
        if (data.auth) {
          setIsAuthenticated(true);
          setUser(JSON.parse(localStorage.getItem('user')));
        }
      }).catch(() => {
        console.log('user is not authenticated');
        localStorage.removeItem("token");
      });
    }
  }, [])


  

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setUser({});
    window.location.href = "/";
  }

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <UserContext.Provider value={{ user, setUser }}>
        <ProductContext.Provider value={{ products, products }}>
          <BrowserRouter>
            <NavBar>
              <Link to="/" className="mx-3">Home</Link>
              {
                isAuthenticated ? 
                <>
                { user && user.role === 1 && <Link to="admin" className="mx-3">Favoris</Link>}
                <button className="float-end btn btn-danger" onClick={() => logout()}>Logout</button> 
                </>
                :
                  <>
                    <Link to="/login" className="mx-3">Login</Link>
                    <Link to="/register" className="mx-3">Register</Link>
                  </>
              }
            </NavBar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/products/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<ProtectedRoute/>}>
                <Route path="/admin" element={<DashboardAdmin />} />
              </Route>
            </Routes>
          </BrowserRouter>
          </ProductContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
