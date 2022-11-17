const services = require("../services/people.hr.services");
const utils = require("../lib/utils");

function controller() { }

controller.prototype.fetchRecordsOfPeopleHR = async (req, res) => {
  try {
    let status = await services.fetchDataOfPeopleHR(req.body);
    utils.sendAPIResponse(res, {
      statusCode: 200,
      result: status,
    });
  } catch (err) {
    finalError = {
      error: err.errorMessages,
      status: err.statusCode ? err.statusCode : null,
    };
    res.status(500).send(finalError);
  }
};

module.exports = new controller();
