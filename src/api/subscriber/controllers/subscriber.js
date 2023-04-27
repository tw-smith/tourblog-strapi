'use strict';

/**
 * subscriber controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::subscriber.subscriber');

module.exports = {
    async create(ctx) {
        let entity = await strapi.service("api::subscriber.subscriber").create(ctx.request.body)
    }
}
