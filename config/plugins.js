module.exports = ({ env }) => ({
    upload: {
        enabled: true,
        config: {
            breakpoints: {
                xlarge: 1920,
                large: 1000,
                medium: 750,
                small: 500
            }
        }
    },
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'strapi@mail.tw-smith.me',
            }
        }
    }

})