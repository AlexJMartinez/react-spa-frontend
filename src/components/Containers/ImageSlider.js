import React, {useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


const ImageSlider = ({slides}) => {

    
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" />
            <FaArrowAltCircleRight className="left-arrow" />
            {slides.map((slide) => {
                return (
                    <img src={slide.img_url} alt=""/>
                )
            })}
        </section>
    )
}


export default ImageSlider