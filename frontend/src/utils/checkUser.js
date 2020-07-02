import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const hoc = (ComposedComponent) => {
  class CheckUser extends Component {
    componentDidMount() {
      if (Object.entries(this.props.user).length === 0) {
        this.props.history.push("/userlist");
      }
    }

    PropTypes = {
      router: PropTypes.object,
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    user: state.github.user,
  });

  return connect(mapStateToProps, null)(CheckUser);
};

export default hoc;
