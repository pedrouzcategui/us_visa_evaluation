export const apiRouterErrors = {
  badRequest: {
    error: true,
    message: "badRequest",
    status: 400,
  },
  unauthorized: {
    error: true,
    message: "Unauthorized",
    status: 401,
  },
  notFound: {
    error: true,
    message: "Not found",
    status: 404,
  },
  tooManyRequests: {
    error: true,
    message: "Too many requests",
    status: 429,
  },
  serverError: {
    error: true,
    message: "Server Failed",
    status: 429,
  },
};
