module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('userTalkRooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            talkId: {
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable('userTalkRooms');
    }
};
