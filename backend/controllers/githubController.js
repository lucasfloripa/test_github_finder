const asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/ErrorResponse"),
  {
    getUsersBySince,
    getUserDetails,
    getUserRepos,
  } = require("../services/githubService");

// @desc      Get Users
// @route     GET /api/v1/github/users/:since
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const data = await getUsersBySince(req.params.since);

  if (!data) {
    return next(new ErrorResponse("Users not found", 404));
  }

  const { links, users } = data;

  // Substring Manipulation for Pagination
  const pagination = links.split(",").map((link) => ({
    url: link
      .split(";")[0]
      .replace("<", "")
      .replace(">", "")
      .trim()
      .split("/")[3]
      .split("?")[1]
      .replace("}", ""),
    btn: link
      .split(";")[1]
      .trim()
      .split("=")[1]
      .replace('"', "")
      .replace('"', ""),
  }));

  res.json({ success: true, length: users.length, users, pagination });
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
