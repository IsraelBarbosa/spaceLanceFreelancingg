import Container from "../Container/Container";
import "./Hero.scss";
import searchIcon from "../../images/Header/searchIcon.png";
import heroBackground from "../../images/Header/heroBackground.png";
import HeroLayout from "../../layout/HeroLayout/HeroLayout";

function Hero() {
  return (
    <HeroLayout>
      <Container>
        <div className="hero">
          <div className="hero-container-titulo-btn-e-form">
            <div className="hero-container-titulo">
              <h1 className="hero__titulo">Are you looking for Freelancers?</h1>
              <h2 className="hero__sub-titulo">
                Hire Great Freelancers, Fast. Spacelance helps you hire elite
                freelancers at a moment's notice
              </h2>
            </div>
            <div className="hero-container-btn-e-form">
              <a className="hero__btn" href="./hireAFreelancer">
                Hire a freelancer
              </a>
              <form className="hero__form">
                <input
                  className="hero__form__input"
                  placeholder="search freelance work"
                />
                <button type="submit" className="hero__form__btn-submit">
                  <img src={searchIcon} alt="search icon" />
                </button>
              </form>
            </div>
          </div>
          <div className="hero-container-img">
            <img
              className="hero__background"
              src={heroBackground}
              alt="hero background"
            />
          </div>
        </div>
      </Container>
    </HeroLayout>
  );
}

export default Hero;
