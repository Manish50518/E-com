import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login_reg">
      <header className="page_header">Register</header>
      <hr className="page_hr" />
      <form className="contact_form">
        <label htmlFor="name" className="contact_form">
          Full Name
        </label>
        <br />
        <input type="text" id="name" className="name_email_contact" />
        <br />
        <label htmlFor="emil">Email address</label>
        <br />
        <input type="email" id="email" className="name_email_contact" />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input type="password" id="pass" className="name_email_contact_btm" />
        <p htmlFor="link" className="login_contact">
          Already has an account? <Link to={"/login"}>Login</Link>
        </p>
        <button className="submit_contact">Register</button>
      </form>
    </div>
  );
}

export default Register;
