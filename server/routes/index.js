const Authentication = require('../controllers/authentication');
const profileController = require('../controllers/profile.controller');
const contactController = require('../controllers/contactMessage.controller');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({ message: 'Token is valid' })
  });
  app.post('/api/v1/signin', requireSignin, Authentication.signin);
  app.post('/api/v1/signup', Authentication.signup);
  app.post('/api/v1/editProfile', profileController.editUser);
  app.post('/api/v1/sendMessage', contactController.sendMessage);
  app.post('/fetchUser', profileController.getUser);
  
  app.post('/signout', Authentication.signOut);

};
