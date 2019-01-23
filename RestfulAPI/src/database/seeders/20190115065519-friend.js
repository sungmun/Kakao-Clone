"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Friends",
            [
                {
                    userId: 1,
                    friendId: 2,
                    createdAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, ""),
                    updatedAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                },
                {
                    userId: 2,
                    friendId: 1,
                    createdAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, ""),
                    updatedAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                },
                {
                    userId: 3,
                    friendId: 1,
                    createdAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, ""),
                    updatedAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                },
                {
                    userId: 2,
                    friendId: 3,
                    createdAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, ""),
                    updatedAt: new Date()
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "")
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Friends", null, {});
    }
};
