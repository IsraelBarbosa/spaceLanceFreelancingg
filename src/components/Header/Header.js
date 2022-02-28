import "./Header.scss";
import logoSpaceLance from "../../images/Header/logoSpaceLance.png";
import Container from "../Container/Container";
import menuIcon from "../../images/Header/menuIcon.svg";
import abrirFecharMenu from "./funcoes/abrirFecharMenu";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";

function Header() {
  return (
    <HeaderLayout>
      <Container>
        <div className="header">
          <div className="container-icon-menu-e-link-logo">
            <img
              className="header__menu-icon"
              onClick={abrirFecharMenu}
              src={menuIcon}
              alt="menu icon"
            />
            <a className="header__link-logo" href="./index.html">
              <img
                className="header__logo"
                src={logoSpaceLance}
                alt="logo space lance"
              />
            </a>
          </div>

          <nav className="header__nav">
            <div className="container-menu-icon">
              <img
                className="header__nav__menu-icon"
                onClick={abrirFecharMenu}
                src={menuIcon}
                alt="menu icon"
              />
            </div>
            <div className="container-nav-links">
              <a className="header__nav__link" href="./home">
                Home
              </a>
              <a className="header__nav__link" href="./findWork">
                Find work
              </a>
              <a className="header__nav__link" href="./findFreelancers">
                Find Freelancers
              </a>
              <a className="header__nav__link" href="./logIn">
                Log In
              </a>
              <a className="header__nav__link" href="./signUp">
                Sign Up
              </a>
            </div>
          </nav>

          <a className="header__btn" href="./postAProject">
            Post a project
          </a>
        </div>
      </Container>
    </HeaderLayout>
  );
}

export default Header;
