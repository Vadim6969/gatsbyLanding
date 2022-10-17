import React from 'react';
import "./index.scss"
import Slider from "../Slider/Slider";
import corpslide from "../../images/sliderImages/corpslide.png"
import corpslide1 from "../../images/sliderImages/corpslide1.png"
import corpslide2 from "../../images/sliderImages/corpslide2.png"
import corpslide3 from "../../images/sliderImages/corpslide3.png"
import corpslide4 from "../../images/sliderImages/corpslide4.png"
import corpslide5 from "../../images/sliderImages/corpslide5.png"

const sliderParams = {
    slidesPerView: 3,
    spaceBetween: 32,

    navigation: {
        nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
    }, pagination: {
        el: '.swiper-pagination', clickable: true
    }
}

const slides = [
    {
        id: 1, img: corpslide,
        cardTitle: "RNS Vision",

    },
    {
        id: 2, img: corpslide1,
        cardTitle: "IT`s Kicker-2",

    },
    {
        id: 3, img: corpslide2,
        cardTitle: "Аналитические игры",

    },
    {
        id: 4, img: corpslide3,
        cardTitle: "ночное ориентирование",

    },
    {
        id: 5, img: corpslide4,
        cardTitle: "День здоровья",

    },
    {
        id: 6, img: corpslide5,
        cardTitle: "День рождения компании",

    },
]

const CorporateLife = () => {
    return (
        <div className="corporate-life">
            <h1 className="corporate-life__title">
                <span>Корпоративная</span> жизнь</h1>
            <hr/>
            <div className="corporate-life__wrapper">
                <Slider classInfo={"slide__info"} type="cards" sliderParams={sliderParams} slides={slides}/>
            </div>
        </div>
    );
};

export default CorporateLife;