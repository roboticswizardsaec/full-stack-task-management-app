require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/auth", require("./routes/authRoutes"));
app.use("/menu", require("./routes/menuRoutes"));
app.use("/order", require("./routes/orderRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));