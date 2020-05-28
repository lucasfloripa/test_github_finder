const express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  cors = require("cors");

const githubRouter = require("./routes/githubRouter");

dotenv.config({ path: "./config/config.env" });
const { PORT, NODE_ENV } = process.env;

const app = express();

// Bordy Parser
app.use(express.json());

// Morgan
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Cors
app.use(cors());

// Routes
app.use("/api/v1/github", githubRouter);

const server = app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV}, mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
