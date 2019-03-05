const seedData = [
    {
        id: 1,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 2,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 3,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 4,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    }
];

module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert('TalkRooms', seedData, {});
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('TalkRooms', null, {});
    }
};
