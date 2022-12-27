const express = require("express");
const router = express.Router();
const controllers = require("../controllers/peopleHr");
const peopleAppsScheduler = require("../peopleHrApi.js");
const enumUrl = require("../enum/enum");

router.post(enumUrl.API_URL.CREATE_USER, async (req, res) => {
  let result = await peopleAppsScheduler.peopleHrErsScheduler();
  res.send(result);
});

module.exports = router;

