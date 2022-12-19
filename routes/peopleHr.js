const express = require("express");
const router = express.Router();
const controllers = require("../controllers/peopleHr");
const enumUrl = require("../enum/enum");
const peopleAppsScheduler = require("../peopleHrApi.js");
const jiraProjectScheduler = require("../ersUpdateApi.js");
const controller = require("../controllers/jira_controller");

router.post(enumUrl.API_URL.JIRA_PROJECT, async (req, res) => {
  // console.log(req.body);
  // let result = await jiraProjectScheduler.fetchJiraProjectRecords();
  // res.send(result);
  // console.log(res);
  let result=await controller.fetchJiraProjectRecords(req, res)
  res.send(result)
});

router.post(enumUrl.API_URL.CREATE_USER, async (req, res) => {
  let result = await peopleAppsScheduler.peopleHrErsScheduler();
  res.send(result);
});

module.exports = router;
