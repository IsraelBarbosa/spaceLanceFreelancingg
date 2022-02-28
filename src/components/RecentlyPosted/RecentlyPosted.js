import "./RecentlyPosted.scss";
import Container from "../Container/Container";
import arrowBackIcon from "../../images/RecentlyPosted/arrowBackIcon.svg";
import arrowNextIcon from "../../images/RecentlyPosted/arrowNextIcon.svg";
import RecentlyPostedLayout from "../../layout/RecentlyPostedLayout/RecentlyPostedLayout";
import RecentlyPostedCard from "./RecentlyPostedCard/RecentlyPostedCard";
import designLogo from "../../images/RecentlyPosted/designLogo.png";
import canvaLogo from "../../images/RecentlyPosted/canvaLogo.png";
import seoLogo from "../../images/RecentlyPosted/seoLogo.png";

let recentlyPostedWorksArray = [
  {
    imgSrc: designLogo,
    altText: "design logo",
    titulo: "Logo Design",
    paragrafo:
      "Need a professional logo with writing underneath for our jewellery company",
    highestBid: 500,
  },
  {
    imgSrc: canvaLogo,
    altText: "canva logo",
    titulo: "Graphic Design",
    paragrafo:
      "We need a graphic designer with UI/UX skills for our Furniture company",
    highestBid: 500,
  },
  {
    imgSrc: seoLogo,
    altText: "seo logo",
    titulo: "Need a SEO",
    paragrafo:
      "Need a SEO for our company who will let our company to a higher level",
    highestBid: 300,
  },
];

function RecentlyPosted() {
  return (
    <RecentlyPostedLayout>
      <Container>
        <div className="recently-posted">
          <div className="recently-posted-container-titulo-e-btn">
            <div className="recently-posted-container-titulo">
              <h2 className="recently-posted__sub-titulo">
                The latest freelance work!
              </h2>
              <h1 className="recently-posted__titulo">
                Recently Posted{" "}
                <span className="recently-posted__titulo-destaque">Works</span>
              </h1>
            </div>
            <div className="recently-posted-container-btn">
              <button className="recently-posted__btn">
                <img
                  className="recently-posted__seta"
                  src={arrowBackIcon}
                  alt="seta voltar icon"
                />
              </button>
              <button className="recently-posted__btn">
                <img
                  className="recently-posted__seta"
                  src={arrowNextIcon}
                  alt="seta proximo icon"
                />
              </button>
            </div>
          </div>
          <div className="recently-posted-container-cards">
            {recentlyPostedWorksArray.map((work, index) => (
              <RecentlyPostedCard
                imgSrc={work.imgSrc}
                altText={work.altText}
                titulo={work.titulo}
                paragrafo={work.paragrafo}
                highestBid={work.highestBid}
                keyIn={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </RecentlyPostedLayout>
  );
}

export default RecentlyPosted;
