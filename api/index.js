const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const users = require("./routes/user");
const productRoute = require("./routes/products");
const bodyParser = require('body-parser');

mongoose.set("strictQuery", false)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection Successfull..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.use(cors());
app.use(express.json());
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("/api/products", productRoute);
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("Rest api amjilttai ajilla");
});
app.listen(process.env.PORT || 7000, () => {
  console.log(`Server running on port: 7000`);
});

