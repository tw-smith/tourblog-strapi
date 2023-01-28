// 'use strict';

// /**
//  * post service
//  */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::post.post');


'use strict';

/**
 * posts-index service
 */

module.exports = {
    getPost: async (slug) => {
        console.log("in service")
        try {
            let post = await strapi.entityService.findMany(
                "api::post.post", {
                    filters: {
                        slug: slug,
                    },
                    fields: ["id", "title", "subtitle", "content", "publishedAt"],
                    populate: {
                        photos: {
                            fields: ['formats']
                        },
                    },
                });
           // return posts
           //return post

           // reduce data
            let postReduced;
           // post = [post];
            if (post) {
                postReduced = post.reduce((acc, item) => {
                    acc = acc || [];
                    console.log(item)
                    acc.push({
                        id: item.id,
                        title: item.title || "",
                        subtitle: item.subtitle || "",
                        content: item.content || "",
                        publishedAt: item.publishedAt || "",
                        photos: item.photos,
                        //photos: item.photos.formats.small.url,
                    });
                    return acc;
                }, []);
            }
            return postReduced


        } catch (err) {
            return err;
        }
    }
}
