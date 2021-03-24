const Image = require("../models/Photo");

exports.uploadImage = (req, res) => {
  const image = new Image({
    url: req.file.path,
  });
  image.save().then((img) => {
    if (img) {
      return res.send(img);
    } else {
      return res.status(422).send("some error occured");
    }
  });
};
