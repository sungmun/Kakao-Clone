"use strict";
module.exports = (sequelize, DataTypes) => {
    const Friend = sequelize.define(
        "Friend",
        {
            userId: DataTypes.INTEGER,
            friendId: DataTypes.INTEGER
        },
        {}
    );
    Friend.associate = function(models) {
        Friend.hasMany(models.User, {
            foreignKey: "userId"
        });
        Friend.hasMany(models.User, {
            foreignKey: "friendId"
        });
    };
    return Friend;
};
