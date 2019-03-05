module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TalkRooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
        return queryInterface.dropTable('TalkRooms');
    }
};
