// Import our controllers
const userController = require('./../controllers/usercontroller');

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: userController.getUser
  },
  {
    method: 'POST',
    url: '/',
    handler: userController.addUser
  }
]

module.exports = routes;