import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import ProductContext from "./contexts/ProductsContext.js";
import PanierContext from "./contexts/PanierContext.js";
import { Home } from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import DashboardAdmin from "./components/DashboardAdmin.jsx";
import { AuthContext } from "./contexts/AuthContext.js";
import { UserContext } from "./contexts/UserContext.js";
import FavorisContext from "./contexts/FavorisContext.js";
import Connection from "./components/Connection.jsx";
import NavBar from "./components/NavBar.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Favoris from "./components/Favoris.jsx";
import Panier from "./components/Panier.jsx";
import Footer from "./components/Footer.jsx";
import MonCompte from "./components/Account/Moncompte.jsx";
import DashboardAccount from "./components/Dashboard/DashboardAccount.jsx";
import DashboardCommentaires from "./components/Dashboard/DashboardCommentaires.jsx";
import DashboardProductsList from "./components/Dashboard/DashboardProductsList.jsx";
import DashboardProduct from "./components/Dashboard/DashboardProduct.jsx";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./Store/ProductsSlice.js";
import DashboardAddNew from "./components/Dashboard/DashboardAddNew.jsx";
import Checkout from "./components/Checkout.jsx";
import ProtectedRouteAdmin from "./protected/ProtectedRouteAdmin.jsx";
import CheckoutInformation from "./components/CheckoutInformation.jsx";
import ConfirmOrder from "./components/ConfirmOrder.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  //favoris localStorage
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem("favoris");
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  //Favoris true/false
  const [isFavorite, setIsFavorite] = useState();

  //ajout aux favoris
  const addFavorites = (product) => {
    const exist = favorites.find((x) => x.id === product.id);
    if (exist) {
      setFavorites(
        favorites.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      localStorage.setItem(
        "favoris",
        JSON.stringify(
          favorites.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        )
      );
    } else {
      setFavorites([...favorites, { ...product }]);
      localStorage.setItem(
        "favoris",
        JSON.stringify([...favorites, { ...product }])
      );
    }
  };
  //retirer des favoris
  const onRemoveFav = (product) => {
    const exist = favorites.find((x) => x.id === product.id);
    if (exist) {
      localStorage.setItem(
        "favoris",
        JSON.stringify(favorites.filter((x) => x.id !== product.id))
      );
      setFavorites(favorites.filter((x) => x.id !== product.id));
    }
  };

  //double méthode
  const handleFavoris = (product) => {
    if (favorites.find((x) => x.id === product.id)) {
      onRemoveFav(product);
    } else {
      addFavorites(product);
    }
  };

  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favorites));
  }, [favorites]);

  //panier
  const [cartItems, setCartItems] = useState(() => {
    const localItems = localStorage.getItem("items");
    return localItems ? JSON.parse(localItems) : [];
  });

  //ajout au panier
  const onAdd = async (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      await setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      localStorage.setItem(
        "items",
        JSON.stringify(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        )
      );
    } else {
      await setCartItems([...cartItems, { ...product, qty: 1 }]);
      localStorage.setItem(
        "items",
        JSON.stringify([...cartItems, { ...product, qty: 1 }])
      );
    }
  };

  //retirer du panier
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      localStorage.setItem(
        "items",
        JSON.stringify(cartItems.filter((x) => x.id !== product.id))
      );
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    getUser();
    getProducts();
  }, []);

  const getUser = () => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .get("http://localhost:8000/security/user-is-auth", {
          headers: {
            "x-access-token": token,
          },
        })
        .then(({ data }) => {
          if (data) {
            setIsAuthenticated(true);
            setUser(JSON.parse(Cookies.get("token")));
          }
        })
        .catch(() => {
          console.log("user is not authenticated");
          localStorage.removeItem("token");
        });
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <UserContext.Provider value={{ user, setUser }}>
          <ProductContext.Provider
            value={{
              products: products,
            }}
          >
            <FavorisContext.Provider
              value={{
                addFavorites: addFavorites,
                favorites: favorites,
                isFavorite: isFavorite,
                onRemoveFav: onRemoveFav,
                handleFavoris: handleFavoris,
              }}
            >
              <PanierContext.Provider
                value={{
                  cartItems: cartItems,
                  products: products,
                  onAdd: onAdd,
                  onRemove: onRemove,
                }}
              >
                <NavBar
                  user={user}
                  isAuthenticated={isAuthenticated}
                  cartItems={cartItems}
                />

                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route
                    exact
                    path="/products"
                    element={<Products cartItems={cartItems} />}
                  />
                  <Route
                    exact
                    path="/products/:id"
                    element={<ProductDetails cartItems={cartItems} />}
                  />
                  <Route path="/connexion" element={<Connection />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/admin" element={<ProtectedRouteAdmin />}>
                    <Route path="dashboard" element={<DashboardAdmin />} />
                    <Route
                      path="dashboard/products"
                      element={<DashboardProductsList />}
                    />
                    <Route
                      path="dashboard/product/:id"
                      element={<DashboardProduct />}
                    />
                    <Route
                      path="dashboard/addproduct"
                      element={<DashboardAddNew />}
                    />
                    <Route
                      path="dashboard/commentaires"
                      element={<DashboardCommentaires />}
                    />
                    <Route
                      path="dashboard/comptes"
                      element={<DashboardAccount />}
                    />
                  </Route>
                  <Route path="/monpanier" element={<Panier />} />
                  <Route path="/favoris" element={<Favoris />} />
                  <Route path="/moncompte" element={<MonCompte />} />
                  <Route path="/monpanier/resume" element={<Checkout />} />
                  <Route
                    path="/monpanier/informations"
                    element={<CheckoutInformation />}
                  />
                  <Route
                    path="/monpanier/paiement"
                    element={<ConfirmOrder />}
                  />
                </Routes>
                <Footer />
              </PanierContext.Provider>
            </FavorisContext.Provider>
          </ProductContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
