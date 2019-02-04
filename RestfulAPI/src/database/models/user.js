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
            as: "FriendList",
            through: "Friends",
            foreignKey: "userId",
            otherKey: "friendId"
        });

        User.belongsToMany(models.TalkRoom, {
            as: "TalkRoomList",
            through: "UserTalkRooms",
            foreignKey: "userId"
        });
    };
    return User;
};
