import Model from "../../database/models";
import { messageFormat } from "../utile";

export const read = (req, res) => {
    res.status(201).json(messageFormat(true, {}));
};

exports.save = (req, res) => {};
exports.delete = (req, res) => {};
