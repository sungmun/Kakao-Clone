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
        User.hasMany(models.Friend);

        User.belongsToMany(models.TalkRoom, {
            as: "TalkRoomList",
            through: "UserTalkRooms",
            foreignKey: "userId"
        });
    };
    return User;
};
