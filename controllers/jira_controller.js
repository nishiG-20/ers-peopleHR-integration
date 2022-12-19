const jiraService = require("../services/jira_service");
const utils = require("../lib/utils");
const jiraProjectScheduler=require("../ersUpdateApi.js");

function controller() {}
controller.prototype.fetchJiraProjectRecords = (req, res) => {
  (async () => {
    try {
      // var obj = await jiraService.fetchJiraProjectRecords(req.body);
      // utils.sendAPIResponse(res, {
      //   statusCode: 200,
      //   result: obj,
      // });
      let result = await jiraProjectScheduler.fetchJiraProjectRecords();
      // console.log(result)
      return result
    } catch (err) {
      finalError = {
        error: err.errorMessages,
        status: err.statusCode ? err.statusCode : null,
      };
      res.status(500).send(finalError);
    }
  })();
};

module.exports = new controller();
