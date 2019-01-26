"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            platformName: DataTypes.STRING,
            socialId: DataTypes.STRING,
            nickName: DataTypes.STRING,
            photos: DataTypes.STRING
        },
        {}
    );
    User.associate = function(models) {
        User.belongsToMany(User, {
            as: "friend",
            through: "friends"
        });
    };
    return User;
};
