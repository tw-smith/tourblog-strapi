'use strict';

/**
 * comment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::comment.comment');





module.exports = {
    routes: [
      {
        method: "POST",
        path: "/comments",
        handler: "comment.create",
        // config: {
        //   policies: [],
        //   middlewares: [],
        // },
      },
    ],
  };