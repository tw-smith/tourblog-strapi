module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts-index/:tag",
      handler: "posts-index.postsIndex",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/posts-index",
      handler: "posts-index.postsIndex",
      config: {
        policies: [],
        middlewares: [],
      }
    }
  ],
};