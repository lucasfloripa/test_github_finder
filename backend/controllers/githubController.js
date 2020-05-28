const axios = require("axios"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/ErrorResponse");

// @desc      Get Users
// @route     GET /api/v1/github/users/:number?page=:currentpage
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const githubResponse = await axios.get(
    `https://api.github.com/users?since=${req.params.number}`
  );

  if (!githubResponse) {
    return next(new ErrorResponse("Users not found", 404));
  }

  // Pagination
  const pageCount = githubResponse.data.length / 10;
  let page = parseInt(req.query.page);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }

  res.json({
    page: page,
    pageCount: pageCount,
    users: githubResponse.data.slice(page * 10 - 10, page * 10).map((user) => ({
      id: user.id,
      login: user.login,
    })),
  });
});

// @desc      Get User Details
// @route     GET /api/v1/github/users/:username/details
// @access    Public
exports.getUserDetails = asyncHandler(async (req, res, next) => {
  const githubResponse = await axios.get(
    `https://api.github.com/users/${req.params.username}`
  );

  if (!githubResponse) {
    return next(new ErrorResponse("User not found", 404));
  }

  const { id, login, html_url, created_at } = githubResponse.data;

  res.status(200).json({ success: true, data: { id, login, html_url, created_at } });
});

// @desc      Get User Repositories
// @route     GET /api/v1/github/users/:username/repos
// @access    Public
exports.getUserRepos = asyncHandler(async (req, res, next) => {
  const githubResponse = await axios.get(
    `https://api.github.com/users/${req.params.username}/repos`
  );

  if (!githubResponse) {
    return next(new ErrorResponse("User not found", 404));
  }

  const repos = githubResponse.data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
  }));

  res.status(200).json({ success: true, data: repos });
});
