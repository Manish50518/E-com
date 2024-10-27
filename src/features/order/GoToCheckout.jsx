import { useLoaderData } from "react-router-dom";
import OrderSummary from "./orderSUmmary";

function GoToCheckout() {
  const cartdata = useLoaderData();
  const showBtn = false;

  return (
    <div className="checkout">
      <div className="demo">
        <OrderSummary cartdata={cartdata} showBtn={showBtn} />

        <form className="form">
          <div className="name_checkout">
            <div>
              <label htmlFor="fname">First name</label>
              <br />
              <input
                type="text"
                name="fname"
                id="fname"
                required
                className="name_input"
              />
            </div>
            <div>
              <label htmlFor="lname">Last name</label>
              <br />
              <input
                type="text"
                name="lname"
                id="lname"
                className="name_input"
              />
            </div>
          </div>{" "}
          <br />
          <label htmlFor="femail">Email</label>
          <br />
          <input
            type="email"
            name="femail"
            id="femail"
            className="default_input"
          />
          <br />
          <label htmlFor="faddress">Address</label>
          <br />
          <input
            type="text"
            name="faddress"
            id="faddress"
            className="default_input"
          />
          <br />
          <label htmlFor="faddress">Address2</label>
          <br />
          <input
            type="text"
            name="faddress"
            id="faddress"
            className="default_input"
          />
          <br />
          <div className="demo_2">
            <div>
              <label htmlFor="fcountry">Country</label>
              <br />
              <select name="fcountry" id="fcountry" className="country_select">
                <option value="select">select</option>
                <option value="India">India</option>
              </select>
            </div>
            <div>
              <label htmlFor="fstate">State</label>
              <br />
              <select name="fstate" id="fstate" className="state_select">
                <option value="select">select</option>
                <option value=" Karnataka"> Karnataka</option>
              </select>
            </div>
            <div>
              <label htmlFor="fzip">zip</label>
              <br />
              <input type="text" name="fzip" id="fzip" className="zip" />
            </div>
          </div>
          <br />
          <hr />
          <header className="form_header">Payment</header>
          <label htmlFor="namecard">Name of card</label>
          <br />
          <input
            type="text"
            id="namecard"
            name="namecard"
            className="default_input"
          />
          <br />
          <label htmlFor="cardnum">Credit card number</label>
          <br />
          <input
            type="number"
            name="cardnum"
            id="cardnum"
            className="default_input"
          />
          <br />
          <label htmlFor="cardexp">Expiration</label>
          <br />
          <input
            type="text"
            id="cardexp"
            name="cardexp"
            className="default_input"
          />
          <br />
          <label htmlFor="cardcvv">CVV</label>
          <br />
          <input
            type="number"
            name="cardcvv"
            id="cardcvv"
            className="default_input"
          />
          <br />
          <hr />
          <button className="continue_to_checkout">Continue to checkout</button>
        </form>
      </div>
    </div>
  );
}

export default GoToCheckout;
