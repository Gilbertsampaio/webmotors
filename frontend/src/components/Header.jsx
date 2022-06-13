import logo from "../img/logo.png";
import "./Header.scss";

export function Header() {

    return (
        <header>
            <div className="container">
                <a href="./"><img src={logo} alt="Logo" /></a>
            </div>
        </header>
    )
}