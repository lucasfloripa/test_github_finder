const asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/ErrorResponse"),
  {
    getUsers,
    getUserDetails,
    getUserRepos,
  } = require("../services/githubService");

// @desc      Get Users
// @route     GET /api/v1/github/users/:number?page=:currentpage
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const githubResponse = await getUsers(req.params.number);

  if (!githubResponse) {
    return next(new ErrorResponse("Users not found", 404));
  }

  // Pagination
  const pageCount = githubResponse.length / 10;
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
    users: githubResponse.slice(page * 10 - 10, page * 10).map((user) => ({
      id: user.id,
      login: user.login,
    })),
  });
});

// @desc      Get User Details
// @route     GET /api/v1/github/users/:username/details
// @access    Public
exports.getUserDetails = asyncHandler(async (req, res, next) => {
  const githubResponse = await getUserDetails(req.params.username);

  if (!githubResponse) {
    return next(new ErrorResponse("User not found", 404));
  }

  res.status(200).json({ success: true, data: githubResponse });
});

// @desc      Get User Repositories
// @route     GET /api/v1/github/users/:username/repos
// @access    Public
exports.getUserRepos = asyncHandler(async (req, res, next) => {
  const githubResponse = await getUserRepos(req.params.username);

  if (!githubResponse) {
    return next(new ErrorResponse("User not found", 404));
  }

  res.status(200).json({ success: true, data: githubResponse });
});
