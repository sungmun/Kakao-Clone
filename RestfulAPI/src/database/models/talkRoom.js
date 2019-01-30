"use strict";
module.exports = (sequelize, DataTypes) => {
    const TalkRoom = sequelize.define("TalkRoom", {}, {});
    TalkRoom.associate = function(models) {};
    return TalkRoom;
};
