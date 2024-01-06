function Contact() {
  return (
    <div>
      <img
        className="img"
        src="https://codemanbd.com/wp-content/uploads/2022/04/codemanbd_contact-768x672-1.webp"
        alt="contact from photo"
        style={{ width: "200px" }}
      />
      <h1 className="text">Write To Us</h1>
      <input
        type="text"
        name="first"
        placeholder="First Name"
        autoComplete="off"
        required
      />
      <input
        type="text"
        name="last"
        placeholder="Last Name"
        autoComplete="off"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        autoComplete="off"
        required
      />
      <textarea
        rows="5"
        cols="60"
        name="message"
        placeholder="Enter text"
        autoComplete="off"
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </div>
  );
}

export default Contact;
