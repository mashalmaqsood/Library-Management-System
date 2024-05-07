const { body, param, validationResult } = require("express-validator");

const ValidateCreateBook = [
  body("id")
    .isInt()
    .optional()
    .withMessage("The id should be an integer."),
  body("author")
    .isString()
    .withMessage("The title is must and should be a string."),
  body("ISBN")
    .isString()
    .optional()
    .withMessage("The ISBN is must and should be a string."),
  body("genre")
    .isString()
    .withMessage("The genre should be a string."),
  body("publishedYear")
    .isInt()
    .withMessage("The published year should be an integer."),
  body("genre")
    .isString()
    .optional()
    .withMessage("The genre is must and should be a string."),
  body("publisher")
    .isString()
    .withMessage("The publisher should be a string."),
  body("createdAt")
    .isDate()
    .optional()
    .withMessage("The createdAt is must and should be a date."),
  body("updatedAt")
    .isDate()
    .optional()
    .withMessage("The updatedAt is must and should be a date."),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Invalid Input Data", error: errors.array() });
    }
    next();
  },
];

const ValidateUpdateBook = [
    body("id")
    .isInt()
    .optional()
    .withMessage("The id should be an integer."),
  body("author")
    .isString()
    .withMessage("The title is must and should be a string."),
  body("ISBN")
    .isString()
    .optional()
    .withMessage("The ISBN is must and should be a string."),
  body("genre")
    .isString()
    .withMessage("The genre should be a string."),
  body("publishedYear")
    .isInt()
    .withMessage("The published year should be an integer."),
  body("genre")
    .isString()
    .optional()
    .withMessage("The genre is must and should be a string."),
  body("publisher")
    .isString()
    .withMessage("The publisher should be a string."),
  body("createdAt")
    .isDate()
    .optional()
    .withMessage("The createdAt is must and should be a date."),
  body("updatedAt")
    .isDate()
    .optional()
    .withMessage("The updatedAt is must and should be a date."),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Invalid Input Data", error: errors.array() });
    }
    next();
  },
];

const ValidateIdInt = [
  param("id").isInt().withMessage("This is not a valid id."),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Invalid Input Data", error: errors.array() });
    }
    next();
  },
];

module.exports = {
  ValidateCreateBook,
  ValidateUpdateBook,
  ValidateIdInt,
};
