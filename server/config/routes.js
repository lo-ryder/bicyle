var bicycleController = require('../controllers/bicycle.js');

module.exports = function(app) {
    app.get('/users', bicycleController.users);
    app.post('/login', bicycleController.login);
    app.post('/register', bicycleController.register);
    app.get('/browse', bicycleController.getBicycles);
    app.post('/listings', bicycleController.createBicycles);
    app.get('/listings/:id', bicycleController.getMyBicycles);
    app.post('/listings/:id', bicycleController.editBicycles);
    app.delete('/delete/:id', bicycleController.deleteBicycles);
    app.get('/random', bicycleController.getBicyclesRandom);
}