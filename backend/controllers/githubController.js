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
  const users = await getUsers(req.query.number);

  if (!users) {
    return next(new ErrorResponse("Users not found", 404));
  }

  // Pagination
  const pageCount = users.length / 10;
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
    users: users.slice(page * 10 - 10, page * 10).map((user) => ({
      id: user.id,
      login: user.login,
    })),
  });
});

// @desc      Get User Details
// @route     GET /api/v1/github/users/:username/details
// @access    Public
exports.getUserDetails = asyncHandler(async (req, res, next) => {
  const user = await getUserDetails(req.params.username);

  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  res.status(200).json({ success: true, data: user });
});

// @desc      Get User Repositories
// @route     GET /api/v1/github/users/:username/repos
// @access    Public
exports.getUserRepos = asyncHandler(async (req, res, next) => {
  const userRepos = await getUserRepos(req.params.username);

  if (!userRepos) {
    return next(new ErrorResponse("User not found", 404));
  }

  res.status(200).json({ success: true, data: userRepos });
});
