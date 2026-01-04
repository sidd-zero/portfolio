import Navbar from "../components/Navbar";
import CircularMenu from "../components/CircularMenu";

function ContactPage() {
  return (
    <>
      <Navbar />
      <CircularMenu />
      <main>
        <section id="contact" className="contact">
          <div className="contact-container">
            <h2>Let's Talk</h2>
            <p>Email: yourname@email.com</p>
            <div className="contact-buttons">
              <a href="mailto:yourname@email.com" className="btn btn-primary">Send Email</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
