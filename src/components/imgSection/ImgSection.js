import React from 'react';
import img1 from "../../asset/img/anthony-riera--ZZ7I31c0B8-unsplash.jpg"
import img2 from "../../asset/img/arian-darvishi-wh-RPfR_3_M-unsplash.jpg"
import img3 from "../../asset/img/douglas-lopes-OQT9s7fHeO0-unsplash.jpg"
import img4 from "../../asset/img/fotis-fotopoulos-SyvsTmuuZyM-unsplash.jpg"
import img5 from "../../asset/img/jefferson-santos-9SoCnyQmkzI-unsplash.jpg"
import img6 from "../../asset/img/maxwell-nelson-taiuG8CPKAQ-unsplash.jpg"
import img7 from "../../asset/img/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg"

const ImgSection = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />

            </div>
        </div>
    );
};

export default ImgSection;