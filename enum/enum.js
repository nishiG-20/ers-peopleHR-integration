//-----------------------------Configuration required for fetching People HR records---------------------------------
exports.postPayloadOfPeopleHR = {
  contentType: "text/json",
  peopleAppsUrl: "https://api.peopleapps.in/Query",
  method: "POST",
  apiKey: "76491cc3-48ff-496f-adaa-956894c08f3e",
  action: "GetQueryResultByQueryName",
  queryName: "FetchRecentAddedEmployees",
};

//-------------------------- Configuration required for creating Employee in ERS-------------------------------------

exports.postPayloadOfERS = {
  ersUrl: "https://app.eresourcescheduler.cloud/rest/v1/resources",
  contentType: "application/json",
  Authorization: "Bearer e0e1nhh5horvcvdkpss9hif89yu3d5",
  method: "POST",
};

//-------------------------- Configuration required for fetching ERS Employee records -------------------------------------

exports.postPayloadOfErsRecords = {
  ersUrl:
    "https://app.eresourcescheduler.cloud/rest/v1/resources?offset=?offset_val&limit=?total_limit",
  contentType: "application/json",
  Authorization: "Bearer e0e1nhh5horvcvdkpss9hif89yu3d5",
  method: "GET",
};

exports.CONSTANT_VALUES = {
  EMAIL: "@rstartec.com",
}
