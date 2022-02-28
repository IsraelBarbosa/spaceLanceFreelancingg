import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import "./HeaderEHero.scss";
import background from "../../images/HeaderEHero/background.png";

function HeaderEHero() {
  return (
    <div className="header-e-hero">
      <div className="container-header-e-hero">
        <Header /> <Hero />
      </div>
      <img
        className="header-e-hero__background"
        src={background}
        alt="background header e hero"
      />
    </div>
  );
}

export default HeaderEHero;
