'use strict';

/**
 * error-page controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::error-page.error-page');





module.exports = {
    async getSplash(ctx, next) {
      try {
        const data = await strapi
          .service("api::error-page.error-page")
          .getSplash();
        ctx.body = data;
      } catch (err) {
        ctx.badRequest("Post controller error", {moreDetails: err})
      }
    }
  };
