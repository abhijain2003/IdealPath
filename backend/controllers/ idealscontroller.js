const ideal = require("../models/data.json");

exports.idealinfo = (req, res) => {
  try {
    var data = JSON.stringify(ideal);
    res.status(201).send(data);
  } catch (err) {
    res.status(401).json({
      message: "no User Found",
    });
  }
};
