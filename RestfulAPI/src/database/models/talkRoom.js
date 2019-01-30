"use strict";
module.exports = (sequelize, DataTypes) => {
    const TalkRoom = sequelize.define("TalkRoom", {}, {});
    TalkRoom.associate = function(models) {
        TalkRoom.belongsToMany(models.User, {
            as: "UserList",
            through: "UserTalkRooms",
            foreignKey: "talkId"
        });

        TalkRoom.hasMany(models.Talk, {
            as: "Talks",
            foreignKey: "talkRoomId"
        });
    };
    return TalkRoom;
};
