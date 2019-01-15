"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            platformNameplatformName: DataTypes.STRING,
            socialId: DataTypes.STRING,
            nickName: DataTypes.STRING,
            photos: DataTypes.STRING
        },
        {}
    );
    User.associate = function(models) {};
    return User;
};
