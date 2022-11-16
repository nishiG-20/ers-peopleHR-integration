const express = require("express");
const router = express.Router();
const controllers = require("../controllers/people.hr.controllers");

router.post("/rstar-scheduler", (req, res) => {
  controllers.fetchRecordsOfPeopleHR(req, res);
});

module.exports = router;
