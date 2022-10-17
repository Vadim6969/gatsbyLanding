import React from 'react';
import Slider from "../Slider/Slider";
import slide1 from "../../images/sliderImages/slide1.png"
import slide3 from "../../images/sliderImages/slide3.png"
import slide4 from "../../images/sliderImages/slide4.png"
import slide5 from "../../images/sliderImages/slide5.png"
import slide6 from "../../images/sliderImages/slide6.png"


const sliderParams = {
    effect: 'coverflow', grabCursor: true, coverflowEffect: {
        rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true
    }, slidesPerView: "auto", centeredSlides: true, navigation: {
        nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
    }, pagination: {
        el: '.swiper-pagination', clickable: true
    },

}

const slides = [
    {
        id: 1, img: slide1, slideText: {
            title: "Наша компания",
            description: "Высокотехнологичная быстрорастущая IT-компания — разработчик программного обеспечения, основана в\n" + "                            2008 г. шестью выпускниками мат-меха СПбГУ, трижды подряд подтвердившая статус «техногазели» по\n" + "                            версии АО Корпорация МСП, входящая в Ассоциацию РУССОФТ и в число сильнейших\n" + "                            Enterprise-партнёров «1С-Битрикс»."
        }
    },
    {id: 3, img: slide3, slideText: null},
    {id: 4, img: slide4, slideText: null},
    {id: 5, img: slide5, slideText: null},
    {id: 6, img: slide6, slideText: null},
]

const MyCompanySection = () => {
    return (<section id="#my-company" className="my-company">
        <Slider classInfo={"slide__info"} sliderParams={sliderParams} slides={slides}/>
    </section>);
};

export default MyCompanySection;