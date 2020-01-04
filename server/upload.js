const IncomingForm = require("formidable").IncomingForm;

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  form.parse(req);

  form.on("fileBegin", function(name, file) {
    file.path = __dirname + "/uploads/" + file.name;
  });

  form.on("file", function(name, file) {
    console.log("Uploaded " + file.name);
  });

  form.on("end", () => {
    res.json();
  });
};
