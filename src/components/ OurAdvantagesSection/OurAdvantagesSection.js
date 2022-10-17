import React from 'react';
import "./index.scss";
import photo from "../../images/advantagesPhoto.png"
import photo1 from "../../images/advantagesPhoto1.png"
import codesvg from "../../images/svg/codesvg.svg"
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const OurAdvantagesSection = () => {
    return (
        <section id="advantages" className="advantages">
            <h1 className="advantages__title"><span>Наши</span> преимущества</h1>
            <hr/>
            <div className="advantages__wrapper">
                <div className="advantages__item">
                    <img src={photo} alt="Фото"/>
                    <div className="advantages__item-wrapper">
                        <ul >
                            <li>Аккредитованная IT компания;
                                Возможность пройти обучение за счет компании, а также внутреннее обучение от руководителей;
                            </li>
                            <li>ДМС после прохождения испытательного срока;</li>
                            <li> Нам важно наше развитие, поэтому мы даем возможность пробовать себя в новых задачах, если у
                                тебя к ним есть интерес (даже за рамками вашей должности!);
                            </li>
                            <li>Опытные коллеги, у которых есть чему научиться;</li>
                            <li>Реферальная программа для</li>
                        </ul>
                        <ButtonComponent><a href="https://spb.hh.ru/employer/edit/simple?hhtmFromLabel=header&hhtmFrom=main" target="_blank">Наши вакансии</a></ButtonComponent>
                    </div>

                </div>
                <div className="advantages__item">
                    <img src={photo1} alt="Фото"/>
                    <div className="advantages__item-wrapper">
                        <p>Высокотехнологичная IT-компания - разработчик программного обеспечения, основана в 2008 г. шестью
                            выпускниками мат-меха СПбГУ, трижды подряд подтвердившая статус “техногазели” по версии АО
                            Корпорация МСП, входящая в Ассоциацию РУССОФТ и в число сильнейших Enterprise-партнёров
                            «1С-Битрикс».</p>
                        <div className="advantages__icon">
                            <img src={codesvg} alt="photo"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAdvantagesSection;