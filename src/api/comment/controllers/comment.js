'use strict';

/**
 * comment controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::comment.comment');

// Overwrite core controller to allow email on create functionality
module.exports = {
    async create(ctx) {
        let entity = await strapi.service("api::comment.comment").create(ctx.request.body)
        await strapi.plugins['email'].services.email.send({
            to: 'strapi@mail.tw-smith.me',
            from: 'strapi@mail.tw-smith.me',
            subject: 'New comment on Cycling South',
            text: `
                New comment from: ${entity.name}

                Email address: ${entity.email}

                Message: ${entity.message}`
        })

    }
}