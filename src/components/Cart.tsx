import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../store";
import { cart } from "../store/modules/cart/reducer";
import { ICartItem } from "../store/modules/types";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  console.log(cart);


  return (
    <table>
      <thead>
        <tr>
          <th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* item e o valor da posição do array, ou seja, o produto*/}
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Cart;