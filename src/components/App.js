import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Modal from "./Modal";
import ImageGallery from "./ImageGallery";
import Spinner from "./Spinner";
import Button from "./Button";
import imagesApi from "../services/imagesApi";
import styles from "./styles.module.css";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    showModal: false,
    modalImageUrl: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleImageClick = (url) => {
    this.setState({ showModal: true, modalImageUrl: url });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImageUrl: "" });
  };

  render() {
    const { error, images, loading, showModal, searchQuery } = this.state;
    return (
      <>
        <div className={styles.App}>
          <Searchbar onSubmit={this.handleSearchFormSubmit} />
          {error && <p>Something went wrong: {error.message}</p>}
          {loading && <Spinner />}
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onImageClick={this.handleImageClick}
            />
          )}
          {images.length > 0 && !loading && (
            <Button fetchImages={this.fetchImages} />
          )}
        </div>
        {showModal && (
          <Modal onCloseModal={this.handleCloseModal}>
            <img src={this.state.modalImageUrl} alt={searchQuery} />
          </Modal>
        )}
      </>
    );
  }
}
