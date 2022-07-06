import { useContext } from "react";
import { Link } from "react-router-dom";
import PanierContext from "../contexts/PanierContext";
import brand4 from "./../assets/brand4.jpeg";
import "./../styles/panier.css";

const Panier = () => {
  const { cartItems, onRemove, onAdd } = useContext(PanierContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.5;
  const totalPrice = itemsPrice + shippingPrice;

  const totalQtyPerProduct = cartItems.map((item) => item.qty);

  return (
    <div className="flex flex-column mb-8">
      <hr />
      {cartItems.length === 0 && (
        <div>
          <div className=" flex justify-center items-center mt-5">
            <img src={brand4} alt="Marque" className="w-1/4" />
            <div className="flex flex-col items-end">
              <p className="ml-4">
                Votre panier est vide.
                <br />
                Découvrez dès maintenant nos routines et faites vous livrer en
                France et en Europe
              </p>
              <Link to="/products">
                <button className="mt-4 bg-black text-white py-2 px-4  inline-flex items-center ">
                  Nos produits
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {cartItems.length !== 0 && (
        <div>
          <div className=" flex  justify-center">
            <div className="titleCart">
              <h1 className="text-3xl">VOTRE PANIER</h1>

              <h1 className="text-3xl">
                {totalQtyPerProduct.reduce(
                  (previousValue, currentValue) => previousValue + currentValue,
                  0
                )}{" "}
                ARTICLES
              </h1>
            </div>
          </div>
          <div className="mainpanier">
            <div className="paniercomplete">
              <table className="tableCart md:table-fixed table-auto text-center">
                <thead className="h-2">
                  <tr className="border-gray-500 border-top">
                    <th className="w-20 h-20 text-l ">PRODUIT</th>
                    <th className="w-20 h-20 text-l">TITRE</th>
                    <th className="w-20 h-20 text-l">PRIX</th>
                    <th className="w-20 h-20 text-l">PRIX TOTAL</th>
                  </tr>
                </thead>
                {cartItems.map((item) => (
                  <tbody key={item.id} className="border-top border-bottom p-6">
                    <td className="tdGlobal divImagePanier p-6">
                      <img
                        src={item.image1}
                        alt={item.title}
                        className="imagepanier"
                      />
                      <Link
                        to={`/products/${item.id}`}
                        className="ml-2 hover:underline"
                      >
                        <p>{item.title}</p>
                      </Link>
                    </td>

                    <td>
                      <div className="tdGlobal basketAddRem p-6">
                        <button
                          onClick={() => onRemove(item)}
                          className="addBasket"
                        >
                          -
                        </button>
                        <div className="qtyBasket">{item.qty}</div>
                        <button
                          onClick={() => onAdd(item)}
                          className="addBasket "
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="tdGlobal p-6 font-m">{item.price}€</td>
                    <td className="tdGlobal p-6">
                      {(item.price * item.qty).toFixed(2)}€
                    </td>
                  </tbody>
                ))}
              </table>

              <div className="totalpanier">
                <div className="totalItemPanier">
                  <h2 className="text-center font-bold">
                    Total de ma commande
                  </h2>
                  <div className="itemPanier">
                    <div>Sous-total</div>
                    <div>{itemsPrice.toFixed(2)}€</div>
                  </div>
                  <div className="itemPanier">
                    <div>Livraison</div>
                    <div>
                      {shippingPrice === 0 ? (
                        <p>Livraison offerte</p>
                      ) : (
                        <p>{shippingPrice.toFixed(2)}€</p>
                      )}
                    </div>
                  </div>
                  <div className="itemPanier">
                    <div>
                      <strong>Prix total</strong>
                    </div>
                    <div>
                      <strong>{totalPrice.toFixed(2)}€</strong>
                    </div>
                  </div>
                </div>

                <div className="commanderdiv">
                  <Link className="continueShopping" to="/products">
                    Continuer mon shopping
                  </Link>
                  <Link to="/monpanier/resume">
                    <button className="commander">Commander</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
