import { useEffect, useState } from "react";
import "./mtg.css";
import cardBack from "./assets/cardback.png";
import { IconRotate } from "@tabler/icons-react";

function CardImage({ card }) {
    const [displayedCard, setDisplayedCard] = useState(null);
    const [isFalling, setIsFalling] = useState(false);
    const isFlipCard = !!card?.card_faces;
    const [flipIndex, setFlipIndex] = useState(0);

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
                setFlipIndex(0);
                setIsFalling(false);
            }, 700);

            return () => clearTimeout(timeout);
        }
    }, [card, displayedCard]);

    const oldImage = displayedCard
        ? displayedCard.card_faces
            ? displayedCard.card_faces[flipIndex]?.image_uris?.large || cardBack
            : displayedCard.image_uris?.large || cardBack
        : cardBack;

    const newImage = card
        ? card.card_faces
            ? card.card_faces[0]?.image_uris?.large || cardBack
            : card.image_uris?.large || cardBack
        : cardBack;

    function handleFlip() {
        if (displayedCard?.card_faces?.length > 1) {
            setFlipIndex((prev) => (prev === 0 ? 1 : 0));
        }
    }

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
            {isFlipCard && (
                <div className="mtg-flipButtonContainer">
                    <IconRotate
                        className="mtg-flipButton"
                        onClick={handleFlip}
                    />
                </div>
            )}
        </div>
    );
}

export default CardImage;
