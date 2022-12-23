const express = require("express");
const app = express();
const peopleHrRoutes = require("./routes/peopleHr");
const peopleAppsScheduler = require("./peopleHrApi.js");
const coneJob = require("./ersUpdateApi.js");

app.use(express.urlencoded({ extended: true }));
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

app.use("/api", peopleHrRoutes);
const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});

setInterval(() => {
  console.log(`People Apps Scheduler`, new Date());
  peopleAppsScheduler.peopleHrErsScheduler()
}, 10800000);

setInterval(() => {
  console.log(`Jira Projects Scheduler`, new Date());
  coneJob.fetchJiraProjectRecords()
}, 18000000);