module.exports = (sequelize, DataTypes) => {
    const userTalkRooms = sequelize.define(
        'userTalkRooms',
        {
            talkId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER
        },
        {}
    );
    return userTalkRooms;
};
