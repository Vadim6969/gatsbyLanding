import React from 'react';
import "./index.scss"
import vue from "../../images/vue.png"
import drupal from "../../images/drupal.png"
import angular from "../../images/angular.png"
import php from "../../images/php.png"
import react from "../../images/react.png"
import flutter from "../../images/flutter.png"
import dotnet from "../../images/dotnet.png"

const CompetenciesSection = () => {
    return (
        <section id="competencies" className="competencies-sections">
            <div>
                <h1 className="competencies__title">Наши компетенции</h1>
                <ul className="competencies__list">
                    <li className="competencies__item">
                        <img src={vue} alt="icon"/>
                    </li>
                    <li className="competencies__item">
                        <img src={drupal} alt="icon"/>
                    </li>
                    <li className="competencies__item">
                        <img src={angular} alt="icon"/>
                    </li>
                    <li className="competencies__item">
                        <img src={php} alt="icon"/>
                    </li>
                    <li className="competencies__item">
                        <img src={react} alt="icon"/>
                    </li>
                    <li className="competencies__item">
                        <img src={flutter} alt="icon"/>
                    </li>
                    <li className="competencies__item">
                        <img src={dotnet} alt="icon"/>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default CompetenciesSection;
