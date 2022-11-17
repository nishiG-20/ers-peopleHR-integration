//-----------------------------Configuration Required for Fetching People HR Records---------------------------------
exports.postPayloadOfPeopleHR = {
  contentType: "text/json",
  peopleAppsUrl: "https://api.peopleapps.in/Query",
  method: "POST",
  apiKey: "76491cc3-48ff-496f-adaa-956894c08f3e",
  action: "GetQueryResultByQueryName",
  queryName: "FetchRecentAddedEmployees",
};

//-------------------------- Configuration required for Creating employee in ERS-------------------------------------

exports.postPayloadOfERS = {
  ersUrl: "https://app.eresourcescheduler.cloud/rest/v1/resources",
  contentType: "application/json",
  authorizationToken: "Bearer e0e1nhh5horvcvdkpss9hif89yu3d5",
  method: "POST",
};
