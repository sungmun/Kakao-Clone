module.exports = function(sequelize, DataType) {
    return sequelize.define(
        "Members",
        {
            platformName: { field: "platform_name", type: DataType.STRING(15) },
            socialId: {
                field: "social_id",
                type: DataType.STRING(50),
                allowNull: false
            },
            nickName: {
                field: "nick_name",
                type: DataType.STRING(50),
                allowNull: false
            },
            photos: {
                field: "photo",
                type: DataType.STRING(255)
            }
        },
        {
            underscored: true,
            tableName: "members"
        }
    );
};
