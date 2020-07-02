const githubApi = require("../api/githubApi");

const githubService = {
  getUsersBySince: async (since) => {
    return await githubApi
      .get(`/users?${since}`)
      .then((res) => {
        if (res.status === 200 && res.data) {
          return { users: res.data, links: res.headers.link };
        }
      })
      .catch((err) => {
        return err;
      });
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
      .catch((err) => {
        return err;
      });
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
      .catch((err) => {
        return err;
      });
  },
};

module.exports = githubService;
