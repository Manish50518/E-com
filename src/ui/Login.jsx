import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_reg">
      <header className="page_header">Login</header>
      <hr className="page_hr" />
      <form className="contact_form">
        <label htmlFor="emil">Email address</label>
        <br />
        <input type="email" id="email" className="name_email_contact" />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input type="password" id="pass" className="name_email_contact_btm" />
        <br />
        <p className="login_contact">
          New Here? <Link to={"/register"}>Register</Link>
        </p>
        <br />
        <button className="submit_contact">Login</button>
      </form>
    </div>
  );
}

export default Login;
