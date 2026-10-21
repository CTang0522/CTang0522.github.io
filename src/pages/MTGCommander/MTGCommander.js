import MyParticles from "../MyParticles";
import CardDetails from "./CardDetails";
import CardImage2 from "./CardImage2";
import { useState } from "react";
import "./mtg.css";
import { Fade } from "react-awesome-reveal";
import Navbar from "../Navbar";
import { IconSwitch2 } from "@tabler/icons-react";

function MTGCommander() {
    const [cardDetails, setCardDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [selectedColors, setSelectedColors] = useState([]);


    const colorMap = {
        white: "W",
        blue: "U",
        black: "B",
        red: "R",
        green: "G",
    };


    async function getCard() {
        setLoading(true);
        setError(false);
        try {
            let colorQuery = "";
            if (selectedColors.includes("colorless")) {
                colorQuery = "id:c";
            } else if (selectedColors.length > 0) {
                const colors = selectedColors
                    .map((color) => colorMap[color])
                    .join("");

                colorQuery = `id=${colors}`;
            }

            const query = ["is:commander", colorQuery]
                .filter(Boolean)
                .join(" ");
            console.log(
                `Query: https://api.scryfall.com/cards/random?q=${encodeURIComponent(query)}`,
            );
            const response = await fetch(
                `https://api.scryfall.com/cards/random?q=${encodeURIComponent(query)}`,
            );
            if (!response.ok) {
                throw new Error("API Request Failed");
            }
            const data = await response.json();
            setCardDetails(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }


    function handleColorChange(color) {
        setSelectedColors((prev) => {
            if (color === "colorless") {
                return prev.includes("colorless") ? [] : ["colorless"];
            }

            const withoutColorless = prev.filter((c) => c !== "colorless");

            return withoutColorless.includes(color)
                ? withoutColorless.filter((c) => c !== color)
                : [...withoutColorless, color];
        });
    }

    return (
        <div className="App">
            <MyParticles />
            <Navbar />
            <Fade />
            <header className="App-header">
                <div className="mtg-container">
                    <div className="mtg-sections">
                        <CardImage2
                            card={cardDetails}
                        />
                    </div>

                    <div className="mtg-sections mtg-detailsSection">
                        <CardDetails data={cardDetails} />
                        {error && <span>{error}</span>}

                        <div className="mtg-findCommander">
                            <div>
                                <input
                                    type="checkbox"
                                    id="colorRed"
                                    name="colorRed"
                                    className="colorOption colorRed"
                                    value="red"
                                    checked={selectedColors.includes("red")}
                                    onChange={() => handleColorChange("red")}
                                />
                                <input
                                    type="checkbox"
                                    id="colorBlue"
                                    name="colorBlue"
                                    className="colorOption colorBlue"
                                    value="blue"
                                    checked={selectedColors.includes("blue")}
                                    onChange={() => handleColorChange("blue")}
                                />
                                <input
                                    type="checkbox"
                                    id="colorGreen"
                                    name="colorGreen"
                                    className="colorOption colorGreen"
                                    value="green"
                                    checked={selectedColors.includes("green")}
                                    onChange={() => handleColorChange("green")}
                                />
                                <input
                                    type="checkbox"
                                    id="colorWhite"
                                    name="colorWhite"
                                    className="colorOption colorWhite"
                                    value="white"
                                    checked={selectedColors.includes("white")}
                                    onChange={() => handleColorChange("white")}
                                />
                                <input
                                    type="checkbox"
                                    id="colorBlack"
                                    name="colorBlack"
                                    className="colorOption colorBlack"
                                    value="black"
                                    checked={selectedColors.includes("black")}
                                    onChange={() => handleColorChange("black")}
                                />
                                <input
                                    type="checkbox"
                                    id="colorColorless"
                                    name="colorColorless"
                                    className="colorOption colorColorless"
                                    value="colorless"
                                    checked={selectedColors.includes(
                                        "colorless",
                                    )}
                                    onChange={() =>
                                        handleColorChange("colorless")
                                    }
                                />
                            </div>
                            <button
                                onClick={getCard}
                                disabled={loading}
                                className="mtg-findCommanderButton"
                            >
                                <IconSwitch2 />
                                &nbsp;&nbsp;
                                {loading ? "Loading..." : "New Commander"}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default MTGCommander;
