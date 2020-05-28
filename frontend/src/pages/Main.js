import React, { Component } from "react";
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
          className="container-fluid d-flex flex-column px-0"
          style={{ height: "100vh", width: "100vw" }}
        >
          <Navbar />
          <div className="row m-0" style={{ flexGrow: "1" }}>
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
              <UserDetails user={user} userRepos={userRepos} />
            ) : null}
          </div>
        </div>
      );
    } else {
      return <h1>Loading ...</h1>;
    }
  }
}

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
