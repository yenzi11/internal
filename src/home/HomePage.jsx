import React from "react";
import Slider from "react-slick";
import './HomePage.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = () => {
    const headerStyle = {
        color: "white",
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200
    };

    return (
        <div>
            <h1 style={headerStyle}>home</h1>
            <Slider {...sliderSettings}>
                    <div className="gambar">
                        <img src="/assets/sl1.jpg" alt="..." style={{width:'30%'}} />
                    </div>
                    <div>
                        <img src="/assets/l2.jpg" alt="..."  style={{width:'30%'}} />
                    </div>
                    <div>
                        <img src="/assets/sl3.jpg" alt="..." style={{width:'30%'}} />
                    </div>
            </Slider>
        </div>
    )
}

export default HomePage;