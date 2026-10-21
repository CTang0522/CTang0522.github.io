import "./mtg.css";
import cardBack from "./assets/cardback.png";

function CardImage({card}) {
  const imgURL = card?.image_uris?.large || cardBack;

  return (
    <div>
      <div className="mtg-cardFlip">
        <img
          src={imgURL}
          alt={card?.name || "Magic Card Back"}
          className={`mtg-cardImage`}
        />
      </div>
    </div>
  );
}

export default CardImage;
