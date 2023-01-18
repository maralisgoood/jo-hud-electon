import "../index.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <img src="./images/logo.svg" alt="logo" />
        <div className="contact">
          <ul className="icons">
            <li>
              <a href="https://www.google.com/">
                <img src="./images/icon-google.svg" alt="icon-google" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img src="./images/icon-facebook.svg" alt="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/">
                <img src="./images/icon-whatsup.svg" alt="icon-whatsup" />
              </a>
            </li>
          </ul>
          <p>&copy; Maral. Built using AQUA and Tuulai Theme.<a href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>
  );
}
