import React, { Component } from 'react';
import SearhForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import styles from './App.module.css';
import * as API from '../services/photo-api';

const incrementPageNumber = 1;

class App extends Component {
  state = {
    imagesArr: [],
    pageNumber: 1,
    querySearch: '',
    isOpenModal: false,
    largeImageURL: '',
  };

  componentWillMount() {
    document.removeEventListener('keydown', this.closeOnEscape);
  }

  componentDidMount() {
    this.fetchingImages();
    document.addEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.keyCode === 27) {
      this.setState({
        isOpenModal: false,
      });
    }
  };

  fetchingImages = () => {
    const { pageNumber, querySearch } = this.state;
    API.fetchPhotos(pageNumber, querySearch.toLowerCase()).then(response =>
      this.setState(
        prevState => ({
          imagesArr: [...prevState.imagesArr, ...response.data.hits],
        }),
        () =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          }),
      ),
    );
  };

  fetchingNewImages = () => {
    const { pageNumber, querySearch } = this.state;
    API.fetchPhotos(pageNumber, querySearch.toLowerCase())
      .then(response =>
        this.setState({
          imagesArr: [...response.data.hits],
        }),
      )
      .catch();
  };

  changePageNumber = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + incrementPageNumber,
    }));
    this.fetchingImages();
  };

  handelChange = e => {
    this.setState({ querySearch: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({ pageNumber: 1 });
    this.fetchingNewImages();
  };

  openModalWindow = url => {
    this.setState({
      isOpenModal: true,
      largeImageURL: url,
    });
  };

  closeModalWindow = e => {
    if (e.target.tagName === 'IMG') {
      return;
    }
    this.setState({
      isOpenModal: false,
    });
  };

  render() {
    const { querySearch, imagesArr, isOpenModal, largeImageURL } = this.state;
    return (
      <div className={styles.app}>
        <SearhForm
          onSubmitForm={this.onSubmitForm}
          inputValue={querySearch}
          onChangeInput={this.handelChange}
        />
        <Gallery
          imagesArr={imagesArr}
          onClickButton={this.changePageNumber}
          openModal={this.openModalWindow}
        />
        {isOpenModal && (
          <Modal largeURL={largeImageURL} closeModal={this.closeModalWindow} />
        )}
      </div>
    );
  }
}

export default App;
