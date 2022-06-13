const express = require('express');
const db = require("./database")

const app = express();
db.hasConection();

app.listen(3000, () => console.log("Server running on port 3000"));