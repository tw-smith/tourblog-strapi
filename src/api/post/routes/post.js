// 'use strict';

// /**
//  * post router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::post.post');


module.exports = {
    routes: [
      {
        method: "GET",
        path: "/posts/:slug",
        handler: "post.getPost",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };