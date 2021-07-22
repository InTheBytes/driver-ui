import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_51IzkEZG1ujtOE0cJL19elVRjikrN6gtBmEywOl2KOW35ws09dNnfN15o9ZDL4XVAD89mwXhKs6X8tdarbwzerrW700hHVI0Qf6";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8080/payment/stripe", {
        amount: stripePrice,
        token,
        currency: "USD", //Other currencies can be supported here optionally. USD, GBP, and EUR are in backend if we want to mess around with localization options.
        userId: "1" //Add ID of logged-in user here. This demo page uses "1," the id of the macker account.
      })
      .then((response) => {
        console.log(response);
        alert("payment success");
      })
      .catch((error) => {
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