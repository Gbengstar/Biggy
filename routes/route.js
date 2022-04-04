const { Router } = require("express");
const { signup } = require("../controller/user.controller.js");
const { check } = require("../middleware/check.js");

const router = Router();

router.post("/signup", signup);
router.get("/:id", check, (req, res) => {
  res.status(200).json({
    message: "click signup to create your account",
  });
});

module.exports = router;
