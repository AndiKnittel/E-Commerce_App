const express = require("express");
const app = express();
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/user");
const productsRoutes = require("./routes/products");

app.get("/", (req, res) => res.send("test"));
app.use("/user", userRoutes);
app.use("/products", productsRoutes);

app.listen(port, console.log(`Server is running on ${port}`));
