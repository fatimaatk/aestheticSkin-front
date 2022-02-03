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

  console.log("panier", cartItems);

  return (
    <div className="flex flex-column">
      <hr />
      {cartItems.length === 0 && (
        <div>
          <div className="flex justify-center items-center mt-5">
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
      <div className="mainpanier">
        <div className="paniercomplete">
          <table class="table-auto text-center">
            <thead className="h-2">
              <tr>
                <th className="w-20 h-20">Produit</th>
                <th className="w-20 h-20">Titre</th>
                <th className="w-20 h-20">Quantité/Prix</th>
              </tr>
            </thead>
           
            {cartItems.map((item) => (
              <tbody key={item.id} >
                <td>
                  <img
                    src={item.image1}
                    alt={item.title}
                    className="imagepanier"
                  />
                </td>
                <td>
                  <p>{item.title}</p>
                  <div className="basketAddRem">
                    <button onClick={() => onAdd(item)} className="addBasket ">
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item)}
                      className="removeBasket"
                    >
                      -
                    </button>
                  </div>
                </td>

                <td>
                  {item.qty} x {item.price}€
                </td>
              </tbody>
            ))}
          </table>
          {cartItems.length !== 0 && (
            <>
          
              <div className="totalpanier">

              <div className="row justify-end mt-2">
                <div className="col-2">Sous-total</div>
                <div className="col-1 text-right">{itemsPrice.toFixed(2)}€</div>
              </div>

              <div className="row justify-end ">
                <div className="col-2">Livraison</div>
                <div className="col-1 text-right">
                  {shippingPrice === 0 ? (
                    <p>Offerte</p>
                  ) : (
                    <p>{shippingPrice.toFixed(2)}€</p>
                  )}
                </div>
              </div>

              <div className="row justify-end">
                <div className="col-2">
                  <strong>Prix total</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>{totalPrice.toFixed(2)}€</strong>
                </div>
              </div>
             
              <div className="commanderdiv">
                <button className="commander" onClick={() => alert("La commande est indisponible. Ce site est fictif.")}>
                  Commander
                </button>
              </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panier;
