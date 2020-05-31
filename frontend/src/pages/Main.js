import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      since: 0,
      user: {},
      userRepos: {},
      userListScreen: true,
      userDetailsScreen: false,
    };
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
    this.handleOnSinceSearch = this.handleOnSinceSearch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleShowUserDetails = this.handleShowUserDetails.bind(this);
    this.handleToggleScreen = this.handleToggleScreen.bind(this);
  }

  componentDidMount() {
    const { currentPage, since } = this.state;
    this.props.getGithubUsers(since, currentPage);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSetCurrentPage(number) {
    this.setState({ currentPage: number });
    this.props.getGithubUsers(this.state.since, number);
  }

  handleToggleScreen() {
    this.setState({
      userListScreen: !this.state.userListScreen,
      userDetailsScreen: !this.state.userDetailsScreen,
    });
  }

  handleOnSinceSearch() {
    this.props.getGithubUsers(this.state.since, this.state.currentPage);
  }

  async handleShowUserDetails(username) {
    const { getGithubUserDetails, getGithubUserRepos } = this.props;
    const user = await getGithubUserDetails(username);
    const userRepos = await getGithubUserRepos(username);
    this.setState({ user: user.payload, userRepos: userRepos.payload });
    this.handleToggleScreen();
  }

  render() {
    const { users, pagination } = this.props;
    const {
      since,
      user,
      userRepos,
      userListScreen,
      userDetailsScreen,
    } = this.state;

    if (users && pagination) {
      return (
        <div
          id="main-container"
          className="container-fluid d-flex flex-column px-0"
        >
          <Navbar />
          <div className="row flex-grow-1 m-0">
            {userListScreen ? (
              <UserList
                users={users}
                pagination={pagination}
                since={since}
                onShowUserDetails={this.handleShowUserDetails}
                onSetCurrentPage={this.handleSetCurrentPage}
                onSinceSearch={this.handleOnSinceSearch}
                onChange={this.handleOnChange}
              />
            ) : null}
            {userDetailsScreen ? (
              <UserDetails
                user={user}
                userRepos={userRepos}
                onToggleScreen={this.handleToggleScreen}
              />
            ) : null}
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
