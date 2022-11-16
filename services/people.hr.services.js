var requestModule = require("request");
const enumVal = require("../enum/enum.js");

exports.fetchDataOfPeopleHR = async (req) => {
  const { postPayloadOfPeopleHR} = enumVal
  const { contentType, peopleAppsurl, method, } = postPayloadOfPeopleHR
  return new Promise((resolve, reject) => {
    try {
      var headers = {
        "Content-Type": contentType,
      };
      var options = {
        method: method,
        url: peopleAppsurl,
        headers: headers,
        json: true,
        body: req,
      };
      requestModule(options, function (error, response, body) {
        if (response.body.errorMessages) {
          response.body.message = response.body.errorMessages[0];
          response.body.errorIn = "peopleHR";
          response.body.statusCode = response.statusCode;
          reject(response.body);
        }
        resolve(response.body);
      });
    } catch (error) {
      reject(error);
    }
  });
};
