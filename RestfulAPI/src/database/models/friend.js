

module.exports = (sequelize, DataTypes) => {
    const Friend = sequelize.define(
        'Friend',
        {
            userId: DataTypes.INTEGER,
            friendId: DataTypes.INTEGER
        },
        {}
    );
    return Friend;
};
