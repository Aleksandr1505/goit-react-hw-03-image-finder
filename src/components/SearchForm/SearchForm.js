import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmitForm, inputValue, onChangeInput }) => (
  <form onSubmit={onSubmitForm} className={styles.searchForm}>
    <input
      onChange={onChangeInput}
      className={styles.input}
      value={inputValue}
      name="text"
      type="text"
      autoComplete="off"
      placeholder="Search images..."
    />
  </form>
);

SearchForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default SearchForm;
