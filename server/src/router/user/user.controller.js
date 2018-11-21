import jwt from "jsonwebtoken";
import Member from "../../domain/member";

exports.login = (req, res, next) => {
    const { platforName, socialId, nickName, photos } = req.body.user;
    const secret = req.app.get("jwt-secret");

    const check = member => {
        if (!member) throw Error("login failed");
        const p = new Promise((resolve, reject) => {
            jwt.sign(
                {
                    id: member.id,
                    nickName: member.nickName,
                    photos: member.photos,
                    platforName: member.platforName
                },
                secret,
                { expiresIn: "7d", issuer: "veloper.com", subject: "user" },
                (err, token) => {
                    if (err) reject(err);
                    resolve(token);
                }
            );
        });
        return p;
    };

    const respond = token => {
        res.status(201);
        res.json({ token });
    };

    const OnError = error => {
        res.status(403).json({
            message: error.message
        });
    };

    Member.findOne({
        platforName: platforName,
        socialId: socialId
    })
        .then(check)
        .then(respond)
        .catch(OnError);
};
