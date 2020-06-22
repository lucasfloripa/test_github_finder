import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Actions
import {
  getGithubUsers,
  getGithubUserDetails,
  getGithubUserRepos,
} from "../store/actions/githubActions";

// Sections
import UserList from "./UserList";
import UserDetails from "./UserDetails";

// Components
import { Navbar } from "../components";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      since: 0,
    };
  }

  componentDidMount() {
    this.props.getGithubUsers();
    console.log("cdm");
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSetCurrentPage = (number) => {
    this.setState({ currentPage: number });
    this.props.getGithubUsers(this.state.since, number);
    console.log("setCurrentPage");
  };

  handleOnSinceSearch = () => {
    this.props.getGithubUsers(this.state.since, this.state.currentPage);
  };

  handleShowUserDetails = async (username, history) => {
    const { getGithubUserDetails, getGithubUserRepos } = this.props;
    await getGithubUserDetails(username);
    await getGithubUserRepos(username);
    history.push(`/userdetails/${username}`);
  };

  render() {
    const { users, pagination, user, repos } = this.props;
    const { since } = this.state;

    if (users && pagination) {
      return (
        <div
          id="main-container"
          className="container-fluid d-flex flex-column px-0"
        >
          <Navbar />
          <div className="row flex-grow-1 m-0">
            <Router>
              <Switch>
                <Route
                  exact
                  path="/userlist"
                  component={(routeProps) => (
                    <UserList
                      users={users}
                      pagination={pagination}
                      since={since}
                      onShowUserDetails={this.handleShowUserDetails}
                      onSetCurrentPage={this.handleSetCurrentPage}
                      onSinceSearch={this.handleOnSinceSearch}
                      onChange={this.handleOnChange}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/userdetails/:username"
                  component={(routeProps) => (
                    <UserDetails user={user} repos={repos} {...routeProps} />
                  )}
                />
              </Switch>
            </Router>
          </div>
        </div>
      );
    } else {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

Main.propTypes = {
  user: PropTypes.object,
  users: PropTypes.array,
  repos: PropTypes.array,
  pagination: PropTypes.object,
  getGithubUsers: PropTypes.func.isRequired,
  getGithubUserRepos: PropTypes.func.isRequired,
  getGithubUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.github.users,
  user: state.github.user,
  repos: state.github.repos,
  pagination: state.pagination,
});

export default connect(mapStateToProps, {
  getGithubUsers,
  getGithubUserDetails,
  getGithubUserRepos,
})(Main);
