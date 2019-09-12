import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ imagesArr, onClickButton, openModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        {imagesArr.map(image => (
          <PhotoCard key={image.id} photo={image} openModal={openModal} />
        ))}
      </ul>
      <button onClick={onClickButton} className={styles.button} type="button">
        Load More
      </button>
    </>
  );
};

Gallery.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onClickButton: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;
