"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    platformName: "google",
                    socialId: "tjdans174@gmail.com",
                    nickName: "강성문",
                    photos:
                        "https://lh3.googleusercontent.com/-CM57SJbKGEE/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaiCCOhELETUdml3bdnYYf56nIv3A/s96-c/photo.jpg",
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
                    platformName: "facebook",
                    socialId: "tjdans174@naver.com",
                    nickName: "강성문",
                    photos:
                        "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1088024871359658&height=50&width=50&ext=1549607711&hash=AeQq1fMUlwIYRahP",
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
        return queryInterface.bulkDelete("Users", null, {});
    }
};
