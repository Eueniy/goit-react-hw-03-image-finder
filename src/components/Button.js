import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

export default function Button({ fetchImages }) {
  return (
    <>
      <button type="button" className={styles.Button} onClick={fetchImages}>
        Load more
      </button>
    </>
  );
}

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};
