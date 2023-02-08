'use strict';

/**
 * A set of functions called "actions" for `posts-index`
 */

module.exports = {
  async postsIndex(ctx, next) {
    console.log(ctx.params.tag)
    let data
    try {
      if (ctx.params.tag === 'all') {
        console.log('in all post branch')
        data = await strapi
        .service("api::posts-index.posts-index")
        .returnAll();
      } else {
        console.log("in tag search branch")
        data = await strapi
        .service("api::posts-index.posts-index")
        .searchTag(ctx.params.tag)
      }
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post index controller error", {moreDetails: err})
    }
  }
};
