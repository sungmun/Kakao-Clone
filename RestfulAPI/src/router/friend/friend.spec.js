import { expect } from "chai";
import { createMocks } from "node-mocks-http";
import { auth, convertMiddlewareToPromise } from "../utile";
import { login } from "../user/user.controller";
import { remove, save, read } from "./friend.controller";

describe("friend.Controller", () => {
    let token;

    before(() => {
        const { req, res } = createMocks({
            method: "POST",
            url: "/login",
            body: {
                user: {
                    platformName: "google",
                    socialId: "tjdans174@gmail.com"
                }
            }
        });
        return convertMiddlewareToPromise(login, req, res).then(
            () => (token = JSON.parse(res._getData()).message.token)
        );
    });

    describe("save", () => {
        let data;
        before(() => {
            const { req, res } = createMocks({
                method: "POST",
                url: "/friend",
                body: { friend: 2 },
                headers: { "x-access-token": token }
            });

            return convertMiddlewareToPromise(auth, req, res)
                .then(() => convertMiddlewareToPromise(save, req, res))
                .then(() => (data = JSON.parse(res._getData())));
        });

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));

        it("should return success", () =>
            expect(data.success).to.be.equal(true));
    });

    describe("read", () => {
        let data;
        before(() => {
            const { req, res } = createMocks({
                method: "get",
                url: "/friend",
                headers: { "x-access-token": token }
            });

            return convertMiddlewareToPromise(auth, req, res)
                .then(() => convertMiddlewareToPromise(read, req, res))
                .then(() => (data = JSON.parse(res._getData())));
        });

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
        before(() => {
            const { req, res } = createMocks({
                method: "delete",
                url: "/friend",
                body: { friend: 2 },
                headers: { "x-access-token": token }
            });
            return convertMiddlewareToPromise(auth, req, res)
                .then(() => convertMiddlewareToPromise(remove, req, res))
                .then(() => (data = JSON.parse(res._getData())));
        });

        it("message type cheack", () => {
            expect(data).to.have.all.keys("success", "message");
        });

        it("should return success", () => {
            expect(data.success).to.be.equal(true);
        });
    });
});
