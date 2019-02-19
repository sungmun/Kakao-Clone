const seedData = [
    {
        userId: 1,
        friendId: 2,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        userId: 1,
        friendId: 3,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        userId: 2,
        friendId: 1,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        userId: 2,
        friendId: 3,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        userId: 3,
        friendId: 1,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    }
];

module.exports = {
    seedData,
    up: queryInterface => {
        return queryInterface.bulkInsert('Friends', seedData, {});
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('Friends', null, {});
    }
};
