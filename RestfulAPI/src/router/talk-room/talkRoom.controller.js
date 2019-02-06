import Model from "../../database/models";

//talkRoom생성
export const save = (req, res, next) => {
    next();
};

//talkRoom내용 보기
export const read = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    new Promise((resolve, reject) => {
        reject(Error("내용이 없음"));
    })
        .catch(OnError)
        .finally(next);
};
//talkRoom리스트보기
export const listRead = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    new Promise((resolve, reject) => {
        reject(Error("내용이 없음"));
    })
        .catch(OnError)
        .finally(next);
};

//talkRoom 변경
export const updata = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    new Promise((resolve, reject) => {
        reject(Error("내용이 없음"));
    })
        .catch(OnError)
        .finally(next);
};

//talkRoom 마지막 남은 유저 나가기
export const remove = (req, res, next) => {
    const OnError = ({ message }) => res.status(403).json(message);

    const promise = new Promise((resolve, reject) => {
        reject(Error("내용이 없음"));
        resolve();
    });

    promise.catch(OnError).finally(next);
};

//talkRoom 유저추가
export const addUser = (req, res, next) => {
    next();
};
