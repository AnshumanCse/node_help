// const {join} = require("path");

// const homeController = (req, res) => {
//   res.sendFile(join(process.cwd(), "views", "index.html"));
// };

const homeController = (req,res) => {
  res.render('index',{'name':'Deepak'})
}

module.exports =  homeController ;
