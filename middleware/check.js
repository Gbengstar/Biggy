const { userModel } = require("../model/User.js");
exports.check = async (req, res, next) => {
  try {
    const referrer = await userModel.findOne({ phone: req.params.id });

    if (req.cookies.phone == referrer.phone) {
      res.send("You are not eligible to register");
    }

    referrer.entries = referrer.entries + 1;

    await referrer.save();

    next();
  } catch (error) {
    console.log(error);
  }
};
