let httpError = {
  badRequest: (error) => ({
    statusCode: 400,
    body: { error: error.message },
  }),

  forbidden: (error) => ({
    statusCode: 403,
    body: { error: error.message },
  }),

  unauthorized: () => ({
    statusCode: 401,
    body: (new Error('Unauthorized').name = 'UnauthorizedError'),
  }),

  serverError: (error) => ({
    statusCode: 500,
    body: (new Error('ServerError').name = 'ServerError'),
  }),

  ok: (data) => ({
    statusCode: 200,
    body: data,
  }),

  noContent: () => ({
    statusCode: 204,
    body: null,
  }),
};

module.exports = httpError;
