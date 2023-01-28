'use strict';

/**
 * error-page service
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::error-page.error-page');



module.exports = {
    getSplash: async () => {
         try {
            let data = await strapi.entityService.findOne(
                "api::error-page.error-page",1, {
                    populate: {
                        splash: {
                            fields: ['url']
                        },
                    },
                });

            return {
                splashURL: data.splash.url
            }

         } catch (err) {
             return err;
         }
    }
}

