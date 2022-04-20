const cors = require("cors");
const express = require("express");
const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!!"));

app.listen(process.env.PORT || port, () =>
   console.log(`Server started on http://localhost:${port}/`)
);
