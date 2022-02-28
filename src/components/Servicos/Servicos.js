import "./Servicos.scss";
import Container from "../Container/Container";
import ServicosCard from "./ServicosCard/ServicosCard";
import cadeadoIcon from "../../images/Servicos/cadeadoIcon.png";
import searchIcon from "../../images/Servicos/searchIcon.png";
import escudoIcon from "../../images/Servicos/escudoIcon.png";
import ServicosLayout from "../../layout/ServicosLayout/ServicosLayout";

let servicosCardObj = {
  servico1: {
    imgSrc: cadeadoIcon,
    alt: "cadeado icon",
    titulo: "Create Account",
    paragrafo: "First you have to create a account here",
  },
  servico2: {
    imgSrc: searchIcon,
    alt: "escudo icon",
    titulo: "Search work ",
    paragrafo: "Search the best freelance work here",
  },
  servico3: {
    imgSrc: escudoIcon,
    alt: "search icon",
    titulo: "Save and apply",
    paragrafo: "Apply or save and start your work",
  },
};

function Servicos() {
  return (
    <ServicosLayout>
      <Container>
        <div className="servicos">
          <ServicosCard
            imgSrc={servicosCardObj.servico1.imgSrc}
            alt={servicosCardObj.servico1.alt}
            titulo={servicosCardObj.servico1.titulo}
            paragrafo={servicosCardObj.servico1.paragrafo}
          />
          <ServicosCard
            imgSrc={servicosCardObj.servico2.imgSrc}
            alt={servicosCardObj.servico2.alt}
            titulo={servicosCardObj.servico2.titulo}
            paragrafo={servicosCardObj.servico2.paragrafo}
          />
          <ServicosCard
            imgSrc={servicosCardObj.servico3.imgSrc}
            alt={servicosCardObj.servico3.alt}
            titulo={servicosCardObj.servico3.titulo}
            paragrafo={servicosCardObj.servico3.paragrafo}
          />
        </div>
      </Container>
    </ServicosLayout>
  );
}

export default Servicos;
