import Model from "../../database/models";
import { messageFormat } from "../utile";

export const read = (req, res) => {
    res.status(201).json(messageFormat(true, {}));
};

export const save = (req, res) => {
    res.status(201).json(messageFormat(true, {}));
};

export const remove = (req, res) => {
    res.status(201).json(messageFormat(true, {}));
};
