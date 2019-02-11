module.exports = sequelize => {
    const TalkRoom = sequelize.define('TalkRoom', {}, {});
    TalkRoom.associate = models => {
        TalkRoom.belongsToMany(models.User, {
            as: 'UserList',
            through: 'UserTalkRooms',
            foreignKey: 'talkId'
        });

        TalkRoom.hasMany(models.Talk, {
            as: 'Talks',
            foreignKey: 'talkRoomId'
        });
    };
    return TalkRoom;
};
