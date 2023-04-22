// Import
const fastify = require("fastify")({ logger: true });       // enables Fastify’s built-in logger
// const fastifyEnv = require('fastify-env');

require('dotenv').config();

// Import local modules
require("./../db/conn");

// plugins
// const options = {
//     dotenv: {
//         path: `${__dirname}/.env`,
//     }
// }
// fastify.register(fastifyEnv, options);


// Register routes
const userRoutes = require('./../routes/routes')
userRoutes.forEach((route, index) => {
  fastify.route(route)
})


// Listen
const port = process.env.PORT || 5000;
fastify.listen(port, (err) => {
  if (err)
    fastify.log.error(err);
  else
    console.log(`Listening at port no ${port}`);
})