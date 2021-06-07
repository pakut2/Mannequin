const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Message = require("../../models/Message");

// @route   POST api/messages
// @desc    POST message
// @access  public
router.post(
  "/",
  check("message", "Message is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message } = req.body;

    try {
      const msg = new Message({
        message,
      });

      await msg.save();
      return res.json(msg);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
