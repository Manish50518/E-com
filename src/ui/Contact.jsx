function Contact() {
  return (
    <div className="login_reg">
      <header className="page_header">Contact</header>
      <hr className="page_hr" />

      <form className="contact_form">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" className="name_email_contact" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" className="name_email_contact" />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea type="text" id="message" className="message_contact" />
        <br />
        <button className="submit_contact">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
