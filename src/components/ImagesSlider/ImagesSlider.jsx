import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImagesSlider = ({images}) => {

    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
          <div className={className} style={{ ...props.style, color: 'black', zIndex: 1, position: 'absolute', top: '50%', right: '-35px', cursor: 'pointer' }} onClick={onClick}>
            Next
          </div>
        );
      }
    
      const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
          <div className={className} style={{ ...props.style, color: 'black', zIndex: 1, position: 'absolute', top: '50%', left: '-35px', cursor: 'pointer' }} onClick={onClick}>
            Prev
          </div>
        );
      }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{ display: 'flex',flexDirection: 'column',position:'absolute' }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <img src={images[i].src} alt={`product ${images[i].id}`} style={{ width: '100px', height: 'auto', borderRadius: '5px', margin: '0 5px' }} />
     
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {images.map((item) => (
        <div key={item.id}>
          <img src={item.src} alt={`product ${item.id}`} />
        </div>
      ))}
    </Slider>
  );
}

export default ImagesSlider;
