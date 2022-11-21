const express = require("express");
const router = express.Router();
const controllers = require("../controllers/peopleHr");

router.post("/peopleHr-ers-scheduler", (req, res) => {
  controllers.fetchPeopleHrRecords(req, res);
});

module.exports = router;
