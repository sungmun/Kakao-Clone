import { expect } from "chai";
import { createMocks } from "node-mocks-http";
import { auth, convertMiddlewareToPromise } from "../utile";
import { login } from "../user/user.controller";
import { remove, save, read } from "./friend.controller";

const setTokenMocks = (method, data, token) => {
    const { req, res } = setMocks(method, data);
    req.headers = { "x-access-token": token };
    return { req, res };
};

const setMocks = (method, data) =>
    createMocks({
        method: method,
        body: { data }
    });

describe("friend.Controller", () => {
    let token;

    before(() =>
        convertMiddlewareToPromise(
            login,
            setMocks("POST", {
                user: {
                    platformName: "google",
                    socialId: "tjdans174@gmail.com"
                }
            })
        ).then(({ res }) => (token = JSON.parse(res._getData()).message.token))
    );

    describe("save", () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks("POST", { friend: 2 }, token)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(save, promiseData)
                )
                .then(({ res }) => (data = JSON.parse(res._getData())))
        );

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));

        it("should return success", () =>
            expect(data.success).to.be.equal(true));

        it("should friend cheack", () =>
            expect(data.message).to.have.key("friend"));

        it("should friend type cheack", () =>
            expect(data.message.friend).to.have.all.keys(
                "createdAt",
                "id",
                "friendId",
                "userId",
                "updatedAt"
            ));
    });

    describe("read", () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(auth, setTokenMocks("get", null, token))
                .then(promiseData =>
                    convertMiddlewareToPromise(read, promiseData)
                )
                .then(({ res }) => (data = JSON.parse(res._getData())))
        );

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));

        it("should return success", () =>
            expect(data.success).to.be.equal(true));

        it("should return Array", () =>
            expect(data.message.friend).to.be.an("array"));

        it("should return Array type profile", () =>
            data.message.friend.forEach(({ profile }) =>
                expect(profile).to.have.all.keys(
                    "id",
                    "createdAt",
                    "updatedAt",
                    "socialId",
                    "platformName",
                    "nickName",
                    "photos"
                )
            ));
    });

    describe("remove", () => {
        let data, status;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks("delete", { friend: 2 }, token)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(remove, promiseData)
                )
                .then(({ res }) => {
                    status = res.status;
                    data = JSON.parse(res._getData());
                })
        );

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));

        it("should return success", () =>
            expect(data.success).to.be.equal(true));

    });
});
