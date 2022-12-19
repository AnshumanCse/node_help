const express = require("express");
const path = require("path");
const app = express();
const products = require("./data");

const port = 8000;
// setup static and middleware

app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.json("<h1>Home Page</h1>");
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });
  res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product does not Exists");
  }
  return res.json(singleProduct);
});
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hellow wordl");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
  // res.send('hello world')
});
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, '../express/index.html'))

// })

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
