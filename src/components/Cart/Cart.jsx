import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { Context } from "../../utils/Context";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-pnnel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products</span>
            <button className="return-cta"> Return to shop</button>
          </div>
        )}
        {!!cartItems?.length && (
          <>
            <CartItem />

            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">subtotal:</span>
                <span className="total">Rs{cartSubTotal}/-</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  CheckOut
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
