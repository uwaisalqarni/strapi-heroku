module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('https://strapi-heroku-uaq.herokuapp.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '65e2312aabab0455e029e72fbec3fee3'),
    },
  },
});
