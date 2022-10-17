import React from 'react';
import "swiper/css/swiper.css"
import "./index.scss"
import Swiper from "react-id-swiper"


const Slider = ({sliderParams, slides, type, classInfo}) => {
    return (<div className="slider">
            <Swiper {...sliderParams}>
                {slides.map((slide) => {
                    return <div key={slide.id} className="slide">
                        {slide?.slideText && <div className={classInfo}>
                            {slide.slideText?.title && <h1>{slide.slideText.title}</h1>}
                            {slide.slideText?.description && <p>{slide.slideText.description}</p>}
                        </div>}
                        {type === "cards" && slide.cardTitle && <div className="card__info">{slide.cardTitle}</div>}
                        <img src={slide.img} alt="slide"/>
                    </div>
                })}
            </Swiper>
        </div>);
};

export default Slider;