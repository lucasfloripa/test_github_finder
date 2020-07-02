import React from "react";
import PropTypes from "prop-types";

const FormSinceSearch = ({ since, onChange, onSinceSearch }) => {
  return (
    <div
      id="form-since-search"
      className="form-inline d-flex justify-content-center"
    >
      <label htmlFor="since">Since Params</label>
      <div className="form-group mx-sm-3">
        <input
          className="form-control"
          name="since"
          placeholder="Since Number"
          value={since}
          onChange={onChange}
        />
      </div>
      <button className="btn btn-primary" onClick={onSinceSearch}>
        Search
      </button>
    </div>
  );
}

FormSinceSearch.propTypes = {
  since: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSinceSearch: PropTypes.func.isRequired,
};

export default FormSinceSearch;
