const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// import bcrypt for hashing passwords 
const bcrypt = require('bcrypt');

// creates a User model 
class User extends Model {
    // checking password and compare to user input 
    checkPasswrod(userLoginPw) {
        return bcrypt.compareSync(userLoginPw, this.password);
    }
}


// define table columns and configs 
User.init(
    {
        // define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define the username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // define an password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least FOUR characters long
                len: [4]
            }
        }
    },
    {   
        // injected before the user is created, to hash the password 
        hooks: {
            // creates hashing before new instance of user creation 
            async beforeCreate(newUserData) {
                newUserData.password  = await bcrypt.hash(newUserData.password, 10);
                    return newUserData ;  
            }, 
              // creates hashing during the update of an instance of user 
              async beforeUpdate(updateUserData) {
                updateUserData.password  = await bcrypt.hash(updateUserData.password, 10);
                    return updateUserData ;  
            }


        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

// export user model
module.exports = User;