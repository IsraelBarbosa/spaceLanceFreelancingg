import "./FindTheBest.scss";
import Container from "../Container/Container";
import heroImg from "../../images/FindTheBest/hero.png";
import FindTheBestLayout from "../../layout/FindTheBestLayout/FindTheBestLayout";

function FindTheBest() {
  return (
    <FindTheBestLayout>
      <Container>
        <div className="find-the-best">
          <div className="find-the-best-container-img">
            <img
              className="find-the-best__img"
              src={heroImg}
              alt="mulher em pé"
            />
          </div>
          <div className="find-the-best-container-titulo">
            <h1 className="find-the-best__titulo">
              Find The Best{" "}
              <span className="find-the-best__titulo-destaque">
                Freelancers
              </span>{" "}
              Here
            </h1>
            <p className="find-the-best__paragrafo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
              bibendum ornare urna, cursus eget convallis. Feugiat imperdiet
              posuere justo, ultrices interdum sed orci nunc, mattis. Ipsum
              viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra
              dui, sit accumsan, tincidunt massa. Dui cras magnis.
            </p>
          </div>
        </div>
      </Container>
    </FindTheBestLayout>
  );
}

export default FindTheBest;
