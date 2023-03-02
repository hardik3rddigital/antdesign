import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import CarouselItem from "../Json/CarouselData";
import "../CSS/CarouselAntDesign.css";

function CarouselAntDesign() {
  const carousel = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const handlePrev = () => carousel.current.prev();
  const handleNext = () => carousel.current.next();

  return (
    <>
      <div className="HeroSection">
        <Carousel
          afterChange={onChange}
          effect="scrollx"
          autoplay
          className=""
          ref={carousel}
        >
          {CarouselItem.map((value, index) => {
            return (
              <div className="container-fluid" key={index}>
                <div
                  className="content"
                  style={{ background: `url(${value.image})` }}
                >
                  <div className="maxwidth">
                    <div className="CarouselTitle">{value.title}</div>
                    <div className="CarouselDescription">
                      {value.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="CarouselButton">
          <Button onClick={handlePrev} className="handlePrev"><i class="fa fa-angle-left"></i></Button>
          <Button onClick={handleNext} className="handleNext"><i class="fa fa-angle-right"></i></Button>
        </div>
      </div>
    </>
  );
}

export default CarouselAntDesign;
