"use strict";
module.exports = (sequelize, DataTypes) => {
    const TalkRoom = sequelize.define("TalkRoom", {}, {});
    TalkRoom.associate = function(models) {
        TalkRoom.belongsToMany(models.User, {
            as: "UserList",
            through: "UserTalkRooms",
            foreignKey: "talkId"
        });
    };
    return TalkRoom;
};
