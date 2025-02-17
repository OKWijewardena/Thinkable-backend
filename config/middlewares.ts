export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'],  // Allow requests from your frontend origin
      headers: '*',  // You can specify particular headers if needed
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow the necessary HTTP methods
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
