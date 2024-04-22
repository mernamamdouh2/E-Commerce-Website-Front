import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import React from 'react'
import RightButton from './RightButton';
import ViewProductsDetailsHook from "../../hook/products/view-products-details-hook";
import { useParams } from 'react-router-dom';

const ProductGallery = () => {
    const { id } = useParams();
    const [item, images, cat, brand] = ViewProductsDetailsHook(id);
    
    return (
        <div className="product-gallary-card d-flex justify-content-center align-items-center
        pt-2">
            <ImageGallery items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
