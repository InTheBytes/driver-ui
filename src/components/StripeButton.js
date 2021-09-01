import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_51IzkEZG1ujtOE0cJL19elVRjikrN6gtBmEywOl2KOW35ws09dNnfN15o9ZDL4XVAD89mwXhKs6X8tdarbwzerrW700hHVI0Qf6";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    axios
      .post(`${process.env.REACT_APP_SL_API_URL}/payment/stripe`, {
        amount: stripePrice,
        token,
        currency: "USD", //Other currencies can be supported here optionally. USD, GBP, and EUR are in backend if we want to mess around with localization options.
        orderId: "000d7893-7833-4fc6-bf87-28e610c73ba3",
        tip: 1
      })
      .then((response) => {
        console.log("Response:");
        console.log(response);
        alert("payment success");
      })
      .catch((error) => {
        console.log("Error:")
        console.log(error);
        alert("Payment failed");
      });
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="TestDriver"
      image="https://www.clipartmax.com/png/small/327-3275784_free-stock-box-svg-shipping-pizza-delivery-car-icon.png"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"
    />
  );
};

export default StripeButton;