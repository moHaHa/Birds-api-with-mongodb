// src/middlewares/validateBird.js
const { body, validationResult } = require("express-validator");
const moment = require("moment");
const validateBird = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),

  body("birthDate")
    .custom((value) => {
      let momentDate = moment(value);
      if (!momentDate.isValid()) {
        return false;
      }
      return true;
    })
    .withMessage("birthDate must be a Date")
    .notEmpty()
    .withMessage("birthDate is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateBird;
