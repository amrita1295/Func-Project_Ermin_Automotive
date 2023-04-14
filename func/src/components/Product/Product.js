import React from 'react';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Func from '../Func/Func';
import BuyNow from './BuyNow/BuyNow';

const Product = () => {
    return (
        <div>
            <ProductCarousel></ProductCarousel>
            <BuyNow></BuyNow>
        </div>
    );
};

export default Product;