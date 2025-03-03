
export default ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'oshan.wijewardena@gmail.com',
          defaultReplyTo: 'oshan.wijewardena@gmail.com',
          testAddress: 'oshan.wijewardena@gmail.com',
        },
      },
    },
    // ...
  });