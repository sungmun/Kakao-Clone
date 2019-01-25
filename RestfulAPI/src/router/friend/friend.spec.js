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
                createMocks({
                    method: "POST",
                    body: { friend: 2 },
                    headers: { "x-access-token": token }
                })
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
    });

    describe("read", () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: "get",
                    headers: { "x-access-token": token }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(read, promiseData)
                )
                .then(({ res }) => (data = JSON.parse(res._getData())))
        );

        it("message type cheack", () => {
            expect(data).to.have.all.keys("success", "message");
        });

        it("should return success", () => {
            expect(data.success).to.be.equal(true);
        });

        it("should return Array", () => {
            expect(body.message.friend).to.be.an("array");
        });

        it("should return Array type profile", () => {
            expect(body.message.friend)
                .to.be.an("array")
                .that.does.include("profile");
        });
    });

    describe("remove", () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: "delete",
                    body: { friend: 2 },
                    headers: { "x-access-token": token }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(remove, promiseData)
                )
                .then(({ res }) => (data = JSON.parse(res._getData())))
        );

        it("message type cheack", () => {
            expect(data).to.have.all.keys("success", "message");
        });

        it("should return success", () => {
            expect(data.success).to.be.equal(true);
        });
    });
});
