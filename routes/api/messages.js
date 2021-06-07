const express = require("express");
const router = express.Router();

// @route   GET api/messages
// @desc    test route
// @access  public

router.get("/", (req, res) => {
  res.send("test route");
});

module.exports = router;
