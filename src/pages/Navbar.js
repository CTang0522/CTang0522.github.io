import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  return (
    <div className="navbar">

        &nbsp;

        <div className="dropdownContainer">
            <a href={window.origin + "/#/"} className="navbar-link">
                Home
            </a>
        </div>
        

        &nbsp;


        <div className="dropdownContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href={window.origin + "/#/Projects"} className="navbar-link">
                Portfolio
            </a>

            {dropdownVisible && (
            <div className="dropdown">
                &nbsp;<a href="/#/Projects/Calculator" className="navbar-link">
                    - Calculator Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/Chess" className="navbar-link">
                    - Chess Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/Weather" className="navbar-link">
                    - Weather Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/Camera" className="navbar-link">
                    - Camera Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/ArtBoard" className="navbar-link">
                    - Artboard Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/ToDo" className="navbar-link">
                    - To Do List Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/MovieCatalogue" className="navbar-link">
                    - Movie Catalogue Application
                </a>&nbsp;<br/>

                &nbsp;<a href="/#/Projects/PixelArt" className="navbar-link">
                    - PixelArt Application
                </a>&nbsp;<br/>

            </div>
            )}
      </div>

      &nbsp;&nbsp;&nbsp;


    </div>
  );
}

export default Navbar;
