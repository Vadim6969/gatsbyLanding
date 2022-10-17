import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./index.scss"
import {Link} from "gatsby";
export default props => {
    return (
        // Pass on our props

        <Menu {...props}>
            <Link className="nav__item" to="#my-company">Наша компания</Link>
            <Link className="nav__item" to="#working-condition">Условия работы</Link>
            <Link className="nav__item" to="#advantages">Наши преимущества</Link>
            <Link className="nav__item" to="#rnsFamily">RNSFamily</Link>
            <Link className="nav__item" to="#competencies">Наши компетенции</Link>
        </Menu>
    );
};
