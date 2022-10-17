import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/svg/logo.svg"
import "./index.scss"


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <nav className="nav">
                <Link className="nav__item" to="#my-company">Наша компания</Link>
                <Link className="nav__item" to="#working-condition">Условия работы</Link>
                <Link className="nav__item" to="#advantages">Наши преимущества</Link>
                <Link className="nav__item" to="#rnsFamily">RNSFamily</Link>
                <Link className="nav__item" to="#competencies">Наши компетенции</Link>
            </nav>
            <div className="header__contacts">
                <a href="tel:79213645155">+7 921 364-51-55</a>
                <a href="mailto:hr@runetsoft.ru">hr@runetsoft.ru</a>
            </div>
        </header>
    );
};



export default Header
