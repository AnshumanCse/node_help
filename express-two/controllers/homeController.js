// const {join} = require("path");

// const homeController = (req, res) => {
//   res.sendFile(join(process.cwd(), "views", "index.html"));
// };

const homeController = (req,res) => {
  // const data = {
  //   name:'deepal',
  //   id:20
  // }
  res.render('index',{'title':'Home'})
}

module.exports =  homeController ;
