import { expect } from "chai";
import { createMocks } from "node-mocks-http";
import { cheack } from "../utile";
import { login } from "../user/user.controller";
import { remove, save, read } from "./friend.controller";

const user = {
    platformName: "google",
    socialId: "tjdans174@gmail.com"
};

describe("friend.Controller", () => {
    let token;

    before(() => {
        const { req, res } = createMocks({
            method: "POST",
            url: "/login",
            body: { user }
        });
        return new Promise((resolve, reject) => {
            login(req, res, resolve);
        }).then(() => (token = JSON.parse(res._getData()).message.token));
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
            return new Promise((resolve, reject) => {
                cheack(req, res, resolve);
            })
                .then(() => save(req, res, Promise.resolve))
                .then(() => (data = JSON.parse(res._getData())));
        });

        it("message type cheack", done => {
            expect(data).to.have.all.keys("success", "message");
            done();
        });

        it("should return success", done => {
            expect(data.success).to.be.equal(true);
            done();
        });
    });
    describe("read", () => {
        let data;
        before(() => {
            const { req, res } = createMocks({
                method: "get",
                url: "/friend",
                headers: { "x-access-token": token }
            });

            return new Promise((resolve, reject) => {
                cheack(req, res, resolve);
            })
                .then(() => read(req, res, Promise.resolve))
                .then(() => (data = JSON.parse(res._getData())));
        });

        it("message type cheack", done => {
            expect(data).to.have.all.keys("success", "message");
            done();
        });

        it("should return success", done => {
            expect(data.success).to.be.equal(true);
            done();
        });

        it("should return Array", done => {
            expect(body.message.friend).to.be.an("array");
            done();
        });

        it("should return Array type profile", done => {
            expect(body.message.friend)
                .to.be.an("array")
                .that.does.include("profile");
            done();
        });
    });

    describe("delete", () => {
        let data;
        before(() => {
            const { req, res } = createMocks({
                method: "delete",
                url: "/friend",
                body: { friend: 2 },
                headers: { "x-access-token": token }
            });
            return new Promise((resolve, reject) => {
                cheack(req, res, resolve);
            })
                .then(() => remove(req, res, Promise.resolve))
                .then(() => (data = JSON.parse(res._getData())));
        });

        it("message type cheack", done => {
            expect(data).to.have.all.keys("success", "message");
            done();
        });

        it("should return success", done => {
            expect(data.success).to.be.equal(true);
            done();
        });
    });
});
