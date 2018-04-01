var mongoose = require('mongoose');
var Bicycle = mongoose.model('Bicycle');
var User = mongoose.model('User');
var autoIncrement = require('mongoose-auto-increment');

module.exports = {
    //finds all objects in the db
    users: function(request, response) {
        User.find({})
            .then(currentuser => response.json(currentuser))
            .catch(error => console.log(error));
    },
    login: function(request, response) {
        console.log(request.body.Email);
        User.find({ "Email": request.body.Email })
            .then(currentuser => {
                console.log(currentuser)
                if (currentuser[0] && currentuser[0].Password === request.body.Password.toString()) {

                    return response.json(currentuser);
                }
                response.redirect('/');
            })
            .catch(error => console.log(error));;
    },
    register: function(request, response) {
        User.create(request.body)
            .then(currentuser => response.json(currentuser))
            .catch(error => console.log(error));
    },
    getBicyclesRandom: function(request, response) {
        console.log('found route!')
        Bicycle.find({})
            .then(bicyclelistR => { 
                if (bicyclelistR.length) {
                    let bikeOfDay = bicyclelistR[Math.floor(Math.random()*bicyclelistR.length)];
                    return response.json(bikeOfDay);
                  }
                response.json([])})
            .catch(error => console.log(error));
    },
    getBicycles: function(request, response) {
        Bicycle.find({})
            .then(bicyclelist => response.json(bicyclelist))
            .catch(error => console.log(error));
    },
    getMyBicycles: function(request, response) {
        let id = request.params.id;
        Bicycle.findOne({ "Owner.Oid": id})
            .then(bicyclelist => response.json(bicyclelist))
            .catch(error => console.log(error));
    },
    createBicycles: function(request, response) {
        Bicycle.create({
            imgUrl: request.body.imgUrl,
            Title: request.body.Title,
            Description: request.body.Description,
            Price: request.body.Price,
            Location: request.body.Location,
            Owner: {
                Oid: request.body.Owner.Oid,
                Name: request.body.Owner.Name,
                Email: request.body.Owner.Email
              }
          }).then(bicyclelist => response.json(bicyclelist))
            .catch(error => console.log(error));
    },
    editBicycles: function(request, response) {
        let id = request.params.id;
        Bicycle.findByIdAndUpdate({_id: id}, request.body)
            .then(bicyclelist => response.json(bicyclelist))
            .catch(error => console.log(error));
    },
    deleteBicycles: function(request, response) {
        let id = request.params.id;
        Bicycle.deleteOne({_id: id})
            .then(bicyclelist => response.json(bicyclelist))
            .catch(error => console.log(error));
    }
}
