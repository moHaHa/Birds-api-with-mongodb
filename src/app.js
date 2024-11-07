const dotenv = require("dotenv");
dotenv.config();
const appConfig = require("./config/appConfig");
const express = require("express");
// TODO : express-async-errors
const mongoose = require("mongoose");
const app = express();

// connection
mongoose
  .connect(appConfig.dbUri)
  .then(() => {
    console.log("MongoDB connected");
    app.use(express.json());
    app.use("/api/birds", require("./routes/birds"));
    app.use(require("./middlewares/errorHandler"));
    //
    app.listen(appConfig.port, () => {
      console.log(`Server is running on http://localhost:${appConfig.port}`);
    });
  })
  .catch((err) => console.error(err));
