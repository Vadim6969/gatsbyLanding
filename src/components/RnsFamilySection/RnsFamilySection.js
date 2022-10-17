import React from 'react';
import Slider from "../Slider/Slider";
import "./index.scss"
import samurai from "../../images/samurai.png";
import warrior from "../../images/warrior.png";
import strelok from "../../images/strelok.png";
import swagLady from "../../images/swagLady.png";


const sliderParams = {
    effect: 'cube',
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
    }, pagination: {
        el: '.swiper-pagination', clickable: true
    }
}

const slides = [
    {
        id: 1, img: samurai, slideText: {
            title: "RNSFamily",
            description: "Каждый новый проект – это вызов. Каждый отзыв – награда. Каждый день заниматься любимым делом – это удовольствие"
        }
    },
    {
        id: 2, img: warrior, slideText: {
            title: "RNSFamily",
            description: "Высокая концентрация умных и самобытных людей). Возможность реализации профессиональных амбиций, комфортные условия труда."}
    },
    {
        id: 3, img: strelok, slideText: {
            title: "RNSFamily",
            description: "Важно, что работа интересная, задачи не рутинные и команда всегда готова помочь, даже если ты на начальном этапе испытываешь какие-то трудности."
        }
    },
    {
        id: 4, img: swagLady, slideText: {
            title: "RNSFamily",
            description: "Очень уютный офис, приятный коллектив, большие амбиции и все, что надо для их реализации!"
        }
    },
]



const RnsFamilySection = () => {
    return (
        <section id="rnsFamily" className="rns-family-section">
            <Slider classInfo={"slide__info-2"} sliderParams={sliderParams} slides={slides} />
        </section>
    );
};

export default RnsFamilySection;