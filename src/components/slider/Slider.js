import { useState, useEffect } from "react";

import './slider.css'
import back from '../../recources/img/sliderImg/back.png';
import next from '../../recources/img/sliderImg/next.png';

const Slider = () => {
    const [sliderImg, setSliderImg] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0);

    useEffect(() => {
        fetch('./Data/data.json')
            .then(res => res.json())
            .then(data => setSliderImg(data.slider))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        let timerId = setInterval(showAutoNextSlide, 5000);
        return () => {
            clearInterval(timerId);
        }

    }, [sliderImg.length, sliderIndex])

    function showAutoNextSlide() {
        if ((sliderIndex + 1) < slides.length && (sliderIndex + 1) > 0) {
            setSliderIndex(sliderIndex => sliderIndex + 1);
        } else {
            setSliderIndex(sliderIndex => sliderIndex = 0)
        }
    }

    function nextSlide(number) {
        if ((sliderIndex + number) < slides.length && (sliderIndex + number) > 0) {
            setSliderIndex(sliderIndex => sliderIndex + number);
        } else if ((sliderIndex + number) < 0) {
            setSliderIndex(sliderIndex => slides.length - 1);
        } else {
            setSliderIndex(sliderIndex => sliderIndex = 0)
        }
    }

    const slides = sliderImg.map(img => {
        return (
            <div className="slider__wrapper__img">
                <img src={`${img.img}`} alt={img.altimg} className="slider__img"/>
                <p className="slider__paragraph">Автор снимка - {img.autor}, {img.title}</p>
            </div>
        )
    })

    return (
        <div className="slider">
            <button className="slider__button" onClick={() => nextSlide(-1)}>
                <img src={back} alt="button for show back slider"/>
            </button>

            {slides[sliderIndex]}

            <button className="slider__button" onClick={() => nextSlide(1)}>
                <img src={next} alt="button for show next slider"/>
            </button>
        </div>
    )
}

export default Slider;
