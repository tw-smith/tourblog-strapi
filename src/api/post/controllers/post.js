// 'use strict';

// /**
//  * post controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::post.post');


'use strict';

const { NotFoundError } = require("@strapi/utils/lib/errors");



/**
 * A set of functions called "actions" for `posts-index`
 */

module.exports = {
  async getPost(ctx, next) {
    console.log("in controller")
    try {
      const data = await strapi
        .service("api::post.post")
        .getPost(ctx.params.slug);
      if (data.length == 0) {
        ctx.status = 404;
      }
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post controller error", {moreDetails: err})
    }
  }
};
