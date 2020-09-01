import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ img, id, show }) {
  return (
    <li
      key={id}
      className={styles.ImageGalleryItem}
      onClick={() => show(img.largeImageURL)}
    >
      <img
        src={img.webformatURL}
        alt={img.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.func.isRequired,
};
