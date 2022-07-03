import { useState } from "react";
import CheckoutSteps from "../../components/checkouSteps/checkoutSteps";

const ShippingAddressScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div>
      <CheckoutSteps step_1 step_2 />
      <div className="shippingScreen">
        <form className="form">
          <div>
            <h1>Shipping address</h1>
          </div>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter full name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter city"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal code</label>
            <input
              type="number"
              id="postalCode"
              placeholder="Enter postal code"
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter country"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingAddressScreen;
