const services = require("../services/peopleServices");
const utils = require("../lib/utils");

function controller() {}

controller.prototype.fetchPeopleHrRecords = async (req, res) => {
  try {
    let status = await services.fetchPeopleHrData(req.body);
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
