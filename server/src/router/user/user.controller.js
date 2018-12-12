import jwt from "jsonwebtoken";
import Member from "../../domain/member";

exports.login = (req, res, next) => {
    const profile = req.body.user;
    const secret = req.app.get("jwt-secret");

    const tokenIssue = member => jwt.sign({ id: member._id }, secret);

    const respond = token => {
        res.status(201);
        res.json({ token });
    };

    const OnError = error => {
        res.status(403).json({
            message: error.message
        });
    };

    const register = member => {
        const newMemer = new Member(member);
        newMemer.save();
        return member;
    };

    Member.findOne({
        platforName: profile.platforName,
        socialId: profile.socialId
    })
        .then(findMember => (findMember ? findMember : register(profile)))
        .then(tokenIssue)
        .then(respond)
        .catch(OnError);
};

exports.check = (req, res) => {
    const token = req.headers["x-access-token"] || req.query.token;
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "not loggged in"
        });
    }

    const findMember = jwt.verify(token, req.app.get("jwt-secret"));

    const respond = profile => {
        res.status(201).json({
            platforName: profile.platforName,
            socialId: profile.socialId,
            nickName: profile.nickName,
            photos: profile.photos
        });
    };

    const onError = error => {
        res.status(403).json({
            success: false,
            message: error.message
        });
    };

    Member.findById(findMember.id)
        .then(respond)
        .catch(onError);
};
