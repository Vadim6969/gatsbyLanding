import React from 'react';
import './index.scss';

const WorkingConditionSection = () => {
    return (
        <section id="working-condition" className="working-condition">
            <h1 className="working-condition__title">
                Условия <span className="white">работы</span>
            </h1>
            <hr/>
            <ul className="working-condition__list">
                <li>Современный новый большой офис класса «А» в стиле high-tech с видом на Неву и занимающий целый этаж
                    бизнес-центра
                </li>
                <li>Бесплатная развозка от и до метро Новочеркасская</li>
                <li>В офисе предусмотрены различные зоны отдыха, в том числе просторная кухня-трансформер, превращающая
                    столовую в кинозал
                </li>
                <li>Кикер и аэрохоккей в офисе, а также домашняя библиотека
                </li>
                <li>Возможность удаленной работы и своевременная выплата заработной платы
                </li>
                <li>Возможность быстрого карьерного роста
                </li>
            </ul>
        </section>
    );
};

export default WorkingConditionSection;