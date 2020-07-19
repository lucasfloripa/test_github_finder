import React from "react";
import PropTypes from "prop-types";

// Styles
import * as SC from "./styles";

const FormSinceSearch = ({ since, onChange, onSinceSearch }) => {
  return (
    <SC.FormSinceSearch>
      <SC.FormLabel>Since Params</SC.FormLabel>
      <SC.FormGroup>
        <SC.FormInput
          className="form-control"
          name="since"
          placeholder="Since Number"
          value={since}
          onChange={onChange}
        />
      </SC.FormGroup>
      <button className="btn btn-primary" onClick={onSinceSearch}>
        Search
      </button>
    </SC.FormSinceSearch>
  );
};

FormSinceSearch.propTypes = {
  since: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSinceSearch: PropTypes.func.isRequired,
};

export default FormSinceSearch;
