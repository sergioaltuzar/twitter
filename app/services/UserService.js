const User = require('./../models/user');
class UserService {
    static create (id, username, name){
        return new User(id, username, name, "Sin Bio");
    };

    static getInfo(user){
      return [user.id, user.username, user.name, user="Sin bio"]
    }
} 

module.exports = UserService;