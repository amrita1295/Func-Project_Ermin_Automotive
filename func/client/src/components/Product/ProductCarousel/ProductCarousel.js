import React from "react";
import "./ProductCarousel.css";
import product1 from '../../../assets/product.png'
import product2 from '../../../assets/product-2.png'
import product3 from '../../../assets/product-3.png'
import product4 from '../../../assets/product-4.png'
import product5 from '../../../assets/product-5.png'
import product6 from '../../../assets/product-6.png'
import product7 from '../../../assets/product-7.png'



const ProductCarousel = () => {
  return (
    <div className="pt-24 product-bg">
      <div className="carousel w-3/4 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={product1} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide7" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
              src={product2} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
             src={product3} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
             src={product4} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <img
             src={product5} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
             src={product6} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide7" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img
             src={product7} alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-16">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
