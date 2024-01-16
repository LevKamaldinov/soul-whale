import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import soulWhaleServices from "../../services/services";

import './itemCard.css';
import down from '../../recources/img/sliderImg/down.png';

const ItemCard = (props) => {

    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [index, setIndex] = useState(0);
    const {getResource} = soulWhaleServices();

    const getData = () => {
        getResource('../../Data/data.json')
        .then(data => data[props.name])
        .then(data => data.filter(el => el.vendorCode == id))
        .then(el => setItem(el))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getData();
    }, []);
    // надо переделать функцию, чтобы по итогу она возвращала массив со всеми фото, сколько их всего по каждому товару, но без стилей
    // затем из этого массива все фото будут отпрвлены в dots, при этом им будет навешан класс itemCard__slider__dots__img
    // нажимая на ту или иную фотку (либо на кнопку вниз), в основной зоне видимости будет отражаться выбранная фотка либо фото по умолчанию
    // на втором этапе нужно продумать, как в слайдере в проекте foods, чтобы не зависеть от возможного количества фоток в dots

    const renderPhoto = (count, style) => {
        const array = [];
        array.push(<img 
            src={`${require(`../../recources/img/${props.name}Img/${item[0].vendorCode}/${item[0].img}_main.jpg`)}`} 
            alt={item[0].altimg}
            className={style}
            onClick={() => setIndex(0)}>
        </img>);
        for (let i = 1; i < count; i++) {
            array.push(<img 
                src={`${require(`../../recources/img/${props.name}Img/${item[0].vendorCode}/${item[0].img}_${i}.jpg`)}`} 
                alt={item[0].altimg}
                className={style}
                onClick={() => setIndex(i)}>
            </img>);
        };
        return array;
    }

    function nextSlide(number, array) {
        if ((index + number) < array.length && (index + number) > 0) {
            setIndex(index => index = index + number);
        } else if ((index + number) < 0) {
            setIndex(index => index = array.length - 1);
        } else {
            setIndex(index => index = 0)
        }
    }

    if (item[0]) {
        const dots = renderPhoto(item[0].countOfImg, 'itemCard__slider__dots__img');
        const photos = renderPhoto(item[0].countOfImg, 'itemCard__img');

        return (
            <>
                <Link to={`/catalog/${props.name}`}>
                    <button className="back">Назад</button>
                </Link>
                <div className="itemCard__wrapper">
                    <div className="itemCard__slider">
                        <div className="itemCard__slider__dots">
                            <button 
                                name="previously photo"
                                onClick={() => nextSlide(-1, photos)}
                                className="up"/>
                            {dots}
                            <button 
                                name="next photo"
                                onClick={() => nextSlide(1, photos)}
                                className="down"/>
                        </div>
                        <div className="itemCard__slider__main">
                            {photos[index]}
                        </div>
                    </div>
                    <div className="itemCard__info">
                        <h4>{item[0].title}</h4>
                        <p>Цвет: {item[0].color}</p>
                        <p>Доступные размеры: {item[0].size}</p>
                        <p>Цена: {item[0].price}₽</p>
                        <p>Состав: {item[0].description}</p>
                        <p>Артикул: {item[0].vendorCode}</p>
                    </div>
                </div>

            </>
        )
    }
}

export default ItemCard;