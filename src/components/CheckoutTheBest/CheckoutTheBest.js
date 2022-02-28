import Container from "../Container/Container";
import "./CheckoutTheBest.scss";
import bunnyDesignProfilePhoto from "../../images/CheckoutTheBest/bunnyDesignProfilePhoto.png";
import aksaraJoshiProfilePhoto from "../../images/CheckoutTheBest/aksaraJoshiProfilePhoto.png";
import bhaskarTiwariProfilePhoto from "../../images/CheckoutTheBest/bhaskarTiwariProfilePhoto.png";
import setaDireitaIcon from "../../images/CheckoutTheBest/setaDireitaIcon.png";
import CheckoutTheBestLayout from "../../layout/CheckoutTheBestLayout/CheckoutTheBestLayout";




let portfoliosArray = [
  {
    imgSrc: bunnyDesignProfilePhoto,
    altText: "Bunny.design profile",
    nome: "Bunny.design",
    profissao: "UI/UX Designer",
  },
  {
    imgSrc: bhaskarTiwariProfilePhoto,
    altText: "Bhaskar Tiwari profile",
    nome: "Bhaskar Tiwari",
    profissao: "Graphic Designer",
  },
  {
    imgSrc: aksaraJoshiProfilePhoto,
    altText: "Aksara Joshi profile",
    nome: "Aksara Joshi",
    profissao: "Graphic Designer",
  },
];

function CheckoutTheBest() {
  return (
    <CheckoutTheBestLayout>
      <Container>
        <div className="checkout-the-best">
          <h2 className="checkout-the-best__sub-titulo">
            Logos, websites, book covers & more!
          </h2>
          <h1 className="checkout-the-best__titulo">
            Checkout The Best{" "}
            <span className="checkout-the-best__titulo-destaque">
              Portfolios
            </span>{" "}
            Here
          </h1>
          <div className="checkout-the-best-container-cards">
            {portfoliosArray.map((portfolio, index) => (
              <div className="checkout-the-best__card" key={index}>
                <img
                  className="checkout-the-best__card__img"
                  src={portfolio.imgSrc}
                  alt={portfolio.altText}
                />
                <div className="checkout-the-best-card-container-titulo-e-seta">
                  <div className="checkout-the-best-card-container-titulo">
                    <h1 className="checkout-the-best__card__titulo">
                      {portfolio.nome}
                    </h1>
                    <h2 className="checkout-the-best__card__sub-titulo">
                      {portfolio.profissao}
                    </h2>
                  </div>
                  <a
                    className="checkout-the-best__card__link"
                    href="./Bunny.design"
                  >
                    <img
                      className="checkout-the-best__card__seta"
                      src={setaDireitaIcon}
                      alt="seta direita"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-the-best__nav">
            <div className="checkout-the-best__nav__btn"></div>
            <div className="checkout-the-best__nav__btn"></div>
            <div className="checkout-the-best__nav__btn"></div>
          </div>
        </div>
      </Container>
    </CheckoutTheBestLayout>
  );
}

export default CheckoutTheBest;
