import "./ServicosCard.scss";

function ServicosCard({ imgSrc, alt, titulo, paragrafo}) {
  return (
    <div className="servicos__card">
      <img className="servicos__card__img" src={imgSrc} alt={alt} />
      <h1 className="servicos__card__titulo">{titulo}</h1>
      <p className="servicos__card__paragrafo">{paragrafo}</p>
    </div>
  );
}

export default ServicosCard;
