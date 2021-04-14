const validator = {
  validateNote: (req, res, next) => {
    console.log(req.body);
    if (!req.body || !req.body.title || !req.body.text) {
      console.log(`invalid data`);
      res.status(400).json({ status: 400, message: "Invalid data!" });
    }
    next();
  },
};

module.exports = validator;
