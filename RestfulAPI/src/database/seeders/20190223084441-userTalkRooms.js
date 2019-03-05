const seedData = [
    {
        id: 1,
        talkId: 1,
        userId: 1,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 2,
        talkId: 1,
        userId: 2,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 3,
        talkId: 1,
        userId: 3,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 4,
        talkId: 2,
        userId: 2,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 5,
        talkId: 2,
        userId: 3,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 6,
        talkId: 3,
        userId: 1,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 7,
        talkId: 3,
        userId: 2,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 8,
        talkId: 4,
        userId: 1,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    },
    {
        id: 9,
        talkId: 4,
        userId: 3,
        createdAt: '2019-02-16 12:28:00',
        updatedAt: '2019-02-16 12:28:00'
    }
];

module.exports = {
    seedData,
    up: queryInterface =>
        queryInterface.bulkInsert('UserTalkRooms', seedData, {}),
    down: queryInterface => queryInterface.bulkDelete('UserTalkRooms', null, {})
};
