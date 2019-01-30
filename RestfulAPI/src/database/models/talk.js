"use strict";
module.exports = (sequelize, DataTypes) => {
    const Talk = sequelize.define(
        "Talk",
        {
            message: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            talkRoomId: DataTypes.INTEGER
        },
        {}
    );
    Talk.associate = function(models) {};
    return Talk;
};
