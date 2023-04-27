'use strict';

/**
 * subscriber router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

//module.exports = createCoreRouter('api::subscriber.subscriber');

module.exports = {
    routes: [
        {
            method: "POST",
            path: "/subscribers",
            handler: "subscriber.create"
        }
    ]
}
