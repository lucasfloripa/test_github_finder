const api = require("../api/githubApi");

const githubService = {
  getUsers: async (since) => {
    return await api
      .get(`/users?since=${since}`)
      .then((res) => {
        if (res.status === 200 && res.data) return res.data;
      })
      .catch((err) => console.log(err));
  },

  getUserDetails: async (username) => {
    return await api
      .get(`/users/${username}`)
      .then((res) => {
        if (res.status === 200 && res.data) {
          const { id, login, html_url, created_at } = res.data;
          return { id, login, html_url, created_at };
        }
      })
      .catch((err) => console.log(err));
  },

  getUserRepos: async (username) => {
    return await api
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
      .catch((err) => console.log(err));
  },
};

module.exports = githubService;
