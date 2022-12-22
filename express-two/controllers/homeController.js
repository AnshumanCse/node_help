const {join} = require("path");

const homeController = (req, res) => {
  res.sendFile(join(process.cwd(), "views", "index.html"));
};

module.exports =  homeController ;
