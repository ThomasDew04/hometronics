import { memo } from "react";
import supposedLogo from "../img/supposedLogo.png";

export default memo(function Navbar() {
    return (
        <nav className="Navbar">
            <div className="LeftContainerNav">
                <div className="LogoContainer">
                    <img className="NavLogo" src={supposedLogo} alt="Logo" />
                    <a className="NavTitle" href="/">Hometronics</a>
                </div>
            </div>
            <div className="RightContainerNav">
                <div className="NavItems">
                    <a className="NavItem" href="#home">OVER</a>
                    <a className="NavItem" href="#home">CONTACT</a>
                </div>
            </div>
        </nav>
    )
});