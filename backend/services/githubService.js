const githubApi = require("../api/githubApi"),
  ErrorResponse = require("../utils/ErrorResponse");

const githubService = {
  getUsers: async (since) => {
    return await githubApi
      .get(`/users?since=${since}`)
      .then((res) => {
        if (res.status === 200 && res.data) return res.data;
      })
      .catch((err) => new ErrorResponse("Users not found", 404));
  },

  getUserDetails: async (username) => {
    return await githubApi
      .get(`/users/${username}`)
      .then((res) => {
        if (res.status === 200 && res.data) {
          const { id, login, html_url, created_at } = res.data;
          return { id, login, html_url, created_at };
        }
      })
      .catch((err) => new ErrorResponse("User not found", 404));
  },

  getUserRepos: async (username) => {
    return await githubApi
      .get(`/users/${username}/repos`)
      .then((res) => {
        if (res.status === 200 && res.data) {
          const repos = res.data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
          }));
          return repos;
        }
      })
      .catch((err) => new ErrorResponse("Repos not found", 404));
  },
};

module.exports = githubService;
