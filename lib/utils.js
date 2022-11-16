module.exports = {
  sendAPIResponse: function (res, data) {
    res.statusCode = data.statusCode;
    res.setHeader("Content-Type", "application/json");
    res.write(
      data.result
        ? JSON.stringify(data.result)
        : data.error
        ? JSON.stringify(data.error)
        : data
    );
    res.end();
  },
};
