'use strict';

/**
 * error-page router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::error-page.error-page');


module.exports = {
    routes: [
      {
        method: "GET",
        path: "/error-page",
        handler: "error-page.getSplash",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };