const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorHandler");
const appConfig = require("./config/appConfig");
const app = express();
app.use(express.json());

// connection
mongoose
  .connect(appConfig.dbUri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(appConfig.port, () => {
      console.log(`Server is running on http://localhost:${appConfig.port}`);
    });
  })
  .catch((err) => console.error(err));

// routes
const birdsRouter = require("./routes/birds");
app.use("/api/birds", birdsRouter);
app.use(errorHandler);
