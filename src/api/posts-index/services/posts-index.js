'use strict';

/**
 * posts-index service
 */

module.exports = {
    searchTag: async (tag) => {
        console.log("in service tag branch")
        try {
                const posts = await strapi.entityService.findMany(
                    "api::post.post", {
                        filters: {
                            tag: tag,
                            publishedAt: {
                                $null: false,
                            }
                        },
                        fields: ["id", "title", "publishedAt", "slug", "tag", "displayDate"],
                        populate: {
                            coverPhoto: {
                                fields: ["formats"],
                            },
                        },
                    })

           // reduce data
            let postsReduced;
            if (posts && Array.isArray(posts)) {
                postsReduced = posts.reduce((acc, item) => {
                    acc = acc || [];
                    console.log(item)
                    acc.push({
                        id: item.id,
                        title: item.title || "",
                        publishedAt: item.publishedAt || "",
                        slug: item.slug || "",
                        tag: item.tag || "",
                        displayDate: item.displayDate || "",
                        coverPhoto: item.coverPhoto.formats.small.url || "",
                    });
                    return acc;
                }, []);
            }
            return postsReduced


        } catch (err) {
            return err;
        }
    },


    returnAll: async () => {
        try {
                const posts = await strapi.entityService.findMany(
                    "api::post.post", {
                        filters: {
                            publishedAt: {
                                $null: false,
                            }
                        },
                        fields: ["id", "title", "publishedAt", "slug", "tag", "displayDate"],
                        populate: {
                            coverPhoto: {
                                fields: ["formats"],
                            },
                        },
                    })

           // reduce data
            let postsReduced;
            if (posts && Array.isArray(posts)) {
                postsReduced = posts.reduce((acc, item) => {
                    acc = acc || [];
                    console.log(item)
                    acc.push({
                        id: item.id,
                        title: item.title || "",
                        publishedAt: item.publishedAt || "",
                        slug: item.slug || "",
                        tag: item.tag || "",
                        displayDate: item.displayDate || "",
                        coverPhoto: item.coverPhoto.formats.small.url || "",
                    });
                    return acc;
                }, []);
            }
            return postsReduced


        } catch (err) {
            return err;
        }
    }
}
