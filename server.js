require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

app.use("/file", require('./routes/fileRoutes.js'));

app.all("");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on ${port}`));