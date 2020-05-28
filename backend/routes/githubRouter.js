const express = require("express"),
  router = express.Router(),
  {
    getUsers,
    getUserDetails,
    getUserRepos,
  } = require("../controllers/githubController");

router.route("/users/:number").get(getUsers);
router.route("/users/:username/details").get(getUserDetails);
router.route("/users/:username/repos").get(getUserRepos);

module.exports = router;
