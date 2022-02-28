import "./RecentlyPostedCard.scss";

function RecentlyPostedCard({
  imgSrc,
  altText,
  titulo,
  paragrafo,
  highestBid,
  keyIndex
}) {
  return (
    <div className="recently-posted-card" key={keyIndex}>
      <img className="recently-posted-card__img" src={imgSrc} alt={altText} />
      <h1 className="recently-posted-card__titulo">{titulo}</h1>
      <p className="recently-posted-card__paragrafo">{paragrafo}</p>
      <div className="recently-posted-card-container-highest-bid">
        <div className="recently-posted-card-container-dois-highest-bid">
          <span className="recently-posted-card__highest-bid">
            Highest bid{" "}
            <span className="recently-posted-card__highest-bid__br">
              ${highestBid}
            </span>
          </span>
        </div>
        <a className="recently-posted-card__link" href="./applyNow">
          Apply now
        </a>
      </div>
    </div>
  );
}

export default RecentlyPostedCard;
