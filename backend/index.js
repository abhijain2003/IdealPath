const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const idealscontroller= require("./controllers/ idealscontroller");
app.get('/ideal',idealscontroller.idealinfo);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

