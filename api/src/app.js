const express = require('express');
const db = require("./database")
const routes = require("./routes")

const app = express();
app.use(express.json())
db.hasConection();
app.use(routes)

app.listen(3000, () => console.log("Server running on port 3000"));