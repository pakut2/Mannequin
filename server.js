const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

// Define routes
app.use("/api/messages", require("./routes/api/messages"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
