import "./Footer.scss";
import logoSpacelance from "../../images/Footer/logoSpaceLance.png";
import logoInstagram from "../../images/Footer/instagramLogo.png";
import logoTwitter from "../../images/Footer/twitterLogo.png";
import logoFacebook from "../../images/Footer/facebookLogo.png";
import logoMapa from "../../images/Footer/mapaLogo.png";
import logoTelefone from "../../images/Footer/telefoneLogo.png";
import logoEmail from "../../images/Footer/emailLogo.png";
import Container from "../Container/Container";

function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="footer-container-container">
          <div className="footer-container-logo-e-redes-sociais footer-container">
            <img
              className="footer__logo"
              src={logoSpacelance}
              alt="logo SpaceLance"
            />
            <p className="footer__paragrafo">
              Powerful Freelance Marketplace System with ability to change the
              Users (Freelancers & Clients)
            </p>
            <div className="footer-container-redes-sociais">
              <img
                className="footer__rede-social"
                src={logoInstagram}
                alt="instagram logo"
              />
              <img
                className="footer__rede-social"
                src={logoTwitter}
                alt="twitter logo"
              />
              <img
                className="footer__rede-social"
                src={logoFacebook}
                alt="facebook logo"
              />
            </div>
          </div>
          <div className="footer-container-for-clients footer-container">
            <h1 className="footer__titulo">For Clients</h1>
            <a className="footer__link" href="./#">
              Find Freelancers
            </a>
            <a className="footer__link" href="./#">
              Post Project
            </a>
            <a className="footer__link" href="./#">
              Refund Policy
            </a>
            <a className="footer__link" href="./#">
              Privacy Policy
            </a>
          </div>
          <div className="footer-container-for-clients footer-container">
            <h1 className="footer__titulo">For Freelancers</h1>
            <a className="footer__link" href="./#">
              Find Work
            </a>
            <a className="footer__link" href="./#">
              Create Account
            </a>
          </div>
          <div className="footer-container-for-clients footer-container">
            <h1 className="footer__titulo">Call Us</h1>
            <a className="footer__link" href="./#">
              <img
                className="footer__link__logo"
                src={logoMapa}
                alt="mapa logo"
              />
              Kenya
            </a>
            <a className="footer__link" href="./#">
              <img
                className="footer__link__logo"
                src={logoTelefone}
                alt="telefone logo"
              />
              +25470000000
            </a>
            <a className="footer__link" href="./#">
              <img
                className="footer__link__logo"
                src={logoEmail}
                alt="email logo"
              />
              bluelance@gmail.com
            </a>
          </div>
        </div>

        <p className="footer__paragrafo-right-reserved">
          2022 Spacelance. All right reserved
        </p>
      </div>
    </Container>
  );
}

export default Footer;
