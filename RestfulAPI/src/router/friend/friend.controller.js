import Model from "../../database/models";
import { messageFormat } from "../utile";

export const read = (req, res, next) => {
    const user = req.body.profile;

};

export const save = (req, res, next) => {
    res.status(201).json(messageFormat(true, {}));
    next();
};

export const remove = (req, res, next) => {
    res.status(201).json(messageFormat(true, {}));
    next();
};
