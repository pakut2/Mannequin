const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Message = require("../../models/Message");

// @route   POST api/messages
// @desc    POST message
// @access  public
router.post(
  "/",
  check("text", "Text is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { text, timeout } = req.body;

    try {
      const msg = new Message({
        text,
        timeout,
      });

      await msg.save();
      return res.json(msg);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET api/messages/:id
// @desc    GET message by ID
// @access  public
router.get("/:id", async (req, res) => {
  try {
    const msg = await Message.findById(req.params.id);

    if (!msg) {
      return res.status(404).json({ msg: "Message not found" });
    }

    res.json(msg);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Message not found" });
    }

    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/messages/:id
// @desc    DELETE message by ID
// @access  public
router.delete("/:id", async (req, res) => {
  try {
    const msg = await Message.findById(req.params.id);

    if (!msg) {
      return res.status(404).json({ msg: "Message not found" });
    }

    await msg.remove();
    res.json({ msg: "Message removed" });
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Message not found" });
    }

    res.status(500).send("Server Error");
  }
});

module.exports = router;
