import { useEffect, useState } from "react";
import "./mtg.css";
import cardBack from "./assets/cardback.png";

function CardImage({ card }) {
    const [displayedCard, setDisplayedCard] = useState(null);
    const [isFalling, setIsFalling] = useState(false);

    useEffect(() => {
        if (!card) return;

        // Show the first card without an animation.
        if (!displayedCard) {
            setDisplayedCard(card);
            return;
        }

        // Animate the old card away when a new one arrives.
        if (card !== displayedCard) {
            setIsFalling(true);

            const timeout = setTimeout(() => {
                setDisplayedCard(card);
                setIsFalling(false);
            }, 700);

            return () => clearTimeout(timeout);
        }
    }, [card, displayedCard]);

    const oldImage =
        displayedCard?.image_uris?.large || cardBack;

    const newImage =
        card?.image_uris?.large || cardBack;

    return (
        <div className="mtg-cardFlip">
            {/* New card underneath */}
            <img
                src={newImage}
                alt={card?.name || "Next commander"}
                className="mtg-cardImage mtg-cardImageBack"
            />

            {/* Current card falls away */}
            <img
                src={oldImage}
                alt={displayedCard?.name || "Magic Card Back"}
                className={`mtg-cardImage mtg-cardImageFront ${
                    isFalling ? "mtg-cardFalling" : ""
                }`}
            />
        </div>
    );
}

export default CardImage;
