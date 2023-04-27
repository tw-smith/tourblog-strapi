module.exports = {
    async beforeUpdate(event) {    // Connected to "Save" button in admin panel
        const post = await strapi.entityService.findOne("api::post.post", event.params.where.id, {
            fields: ['title', 'publishedAt', 'slug']
        })
        if (post.publishedAt != null) {
            const emailHTML = `<p>Hi there!</p>
                               <p>A new post, "${post.title}", has just been uploaded to Cycling South.</p>
                               <p><a href="https://www.cycling-south.com/post/${post.slug}">Click here to view it</a></p>
                               <p>Thanks for reading!</p>`
            const subscribers = await strapi.entityService.findMany("api::subscriber.subscriber", {
                fields: ['email']
            })
            const emails = subscribers.map((a) => a.email)
            for (let email of emails) {
                try {
                    await strapi.plugins['email'].services.email.send({
                        to: email,
                        from: 'noreply@tw-smith.me',
                        subject: 'New post on Cycling South!',
                        html: emailHTML,
                    })
                } catch(err) {
                    console.log(err)
                }
            }


    }
}
}