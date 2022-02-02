import { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import PanierContext from "../contexts/PanierContext";

const Panier = () => {
  const { cartItems, onRemove, onAdd } = useContext(PanierContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.5;
  const totalPrice = itemsPrice + shippingPrice;

  console.log("panier", cartItems);

  return (
    <div className="flex flex-column">
       <hr />
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <table class="table-auto text-center" key={item.id}>
          <thead>
            <tr>
              <th className="w-20">Produit</th>
              <th className="w-20">Titre</th>
              <th className="w-20">Ajouter</th>
              <th className="w-20">Retirer</th>
              <th className="w-20">Quantité</th>
            </tr>
           
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={item.image1} alt={item.title} className="w-15"/>
              </td>
              <td>
                <p>{item.title}</p>
              </td>
              <td>
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </td>
              <td>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
              </td>
              <td>
                {item.qty} x ${item.price}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Sous-total</div>
            <div className="col-1 text-right">{itemsPrice.toFixed(2)}€</div>
          </div>

          <div className="row">
            <div className="col-2">Frais de livraison</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}€</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Prix total</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement Checkout!")}>
              Commander
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
