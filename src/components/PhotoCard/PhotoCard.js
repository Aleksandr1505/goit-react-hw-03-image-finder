import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ photo, openModal }) => {
  return (
    <li className={styles.galleryItem}>
      <div className={styles.photoCard}>
        <img src={photo.webformatURL} alt="foto" />
        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {photo.likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {photo.views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {photo.comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {photo.downloads}
          </p>
        </div>
        <button
          onClick={() => openModal(photo.largeImageURL)}
          type="button"
          className={styles.fullscreenButton}
        >
          <i className="material-icons" style={{ pointerEvents: 'none' }}>
            zoom_out_map
          </i>
        </button>
      </div>
    </li>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PhotoCard;
