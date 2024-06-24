import styles from "./ContactStyles.module.css";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle"> Contact</h1>
      <form action="https://formspree.io/f/mnnaazkw" method="POST">
        <div className="formGroup">
          <lable htmlFor="name" hidden>
            Name
          </lable>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <lable htmlFor="email" hidden>
            Email
          </lable>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <lable htmlFor="message" hidden>
            Message
          </lable>
          <textarea
            type="text"
            name="name"
            id="name"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
