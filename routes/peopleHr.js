const express = require("express");
const router = express.Router();
const controllers = require("../controllers/peopleHr");

router.post("/peopleHr_ers_scheduler", (req, res) => {
  controllers.fetchPeopleHrRecords(req, res);
});

module.exports = router;
