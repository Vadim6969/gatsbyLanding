import React from 'react';
import "./index.scss";
const Footer = () => {
    return (
        <div className="map">
            <iframe src="https://yandex.ru/map-widget/v1/-/CCUZyFfRsA" width="1344" height="520" frameBorder="1"
                    allowFullScreen={true}></iframe>
        </div>
    );
};

export default Footer;