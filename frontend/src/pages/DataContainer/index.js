import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Actions
import {
  getGithubUsersBySince,
  getGithubUserDetails,
  getGithubUserRepos,
} from "../../store/actions/githubActions";

// Sections
import UserList from "../UserList";
import UserDetails from "../UserDetails";

// Components
import Navbar from "./Navbar";

// Styles
import * as SC from "./styles";

// Utils
import checkUser from "../../utils/checkUser";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      since: "0",
    };
  }

  componentDidMount() {
    this.props.getGithubUsersBySince();
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSinceSearch = () => {
    this.props.getGithubUsersBySince(`since=${this.state.since}&per_page=10`);
  };

  handlePagination = (url) => {
    this.props.getGithubUsersBySince(url);
  };

  handleShowUserDetails = async (username, history) => {
    const { getGithubUserDetails, getGithubUserRepos } = this.props;
    await getGithubUserDetails(username);
    await getGithubUserRepos(username);
    history.push(`/userdetails/${username}`);
  };

  render() {
    const { users, user, repos, pagination } = this.props;
    const { since } = this.state;

    return (
      <SC.Container>
        <Navbar />
        <SC.MainSection>
          <Router>
            <Switch>
              <Route
                exact
                path="/userlist"
                component={(routeProps) => (
                  <UserList
                    users={users}
                    since={since}
                    pagination={pagination}
                    onShowUserDetails={this.handleShowUserDetails}
                    onSinceSearch={this.handleOnSinceSearch}
                    onChange={this.handleOnChange}
                    onPagination={this.handlePagination}
                    {...routeProps}
                  />
                )}
              />
              <Route
                exact
                path="/userdetails/:username"
                component={checkUser((routeProps) => (
                  <UserDetails user={user} repos={repos} {...routeProps} />
                ))}
              />
            </Switch>
          </Router>
        </SC.MainSection>
      </SC.Container>
    );
  }
}

DataContainer.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array,
  repos: PropTypes.array,
  pagination: PropTypes.array,
  getGithubUsersBySince: PropTypes.func.isRequired,
  getGithubUserRepos: PropTypes.func.isRequired,
  getGithubUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.github.users,
  user: state.github.user,
  repos: state.github.repos,
  pagination: state.pagination.pagination,
});

export default connect(mapStateToProps, {
  getGithubUsersBySince,
  getGithubUserDetails,
  getGithubUserRepos,
})(DataContainer);
