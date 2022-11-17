const express = require("express");
const app = express();
let bodyParser = require("body-parser");
const peopleRoutes = require("./routes/people.hr");

const encodeURIComponent = bodyParser.urlencoded({ extended: false });
app.use(encodeURIComponent);
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-with,Content-Type,Accept"
  );
  next();
});

app.use("/api", peopleRoutes);
const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
