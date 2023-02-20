module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'index handler!',
        input: event,
      },
      null,
      2
    ),
  };
};
