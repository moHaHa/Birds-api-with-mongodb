const { body, validationResult } = require("express-validator"); // TODO : joi
const moment = require("moment");
// TODO : move
const foo = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateBird = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .exists()
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
    .exists()
    .notEmpty()
    .withMessage("birthDate is required"),
  foo,
];

module.exports = validateBird;
