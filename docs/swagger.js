module.exports = {
    openapi: "3.0.0",
  info: {
    title: "Blog API",
    description:
      "Full CRUD Blog API, with User registration and authentication.",
    version: "0.1.9",
  },
  paths: {
    "/auth/register": {
      post: {
        summary: "User registration.",
        parameters: [{
          name: "newUser",
          in: "body",
          schema: {

          },
          required: true,
          description: "Registers a user."
        }]
      },
    },
  "/blogs": {
    get: {
      summary: "Test Route",
    },
  },
}
}
