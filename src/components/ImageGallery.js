import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <div>
      <ul className={styles.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem key={image.id} img={image} show={onImageClick} />
        ))}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
