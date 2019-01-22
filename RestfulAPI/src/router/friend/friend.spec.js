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
        let req = httpMocks.createRequest({
            method: "POST",
            url: "/login",
            body: { user }
        });

        let res = httpMocks.createResponse();
        controller.login(req, res);

        token = JSON.parse(res._getData()).message.token;
    });

    describe("save", () => {
        let req, res, data;
        before(() => {
            req = httpMocks.createRequest({
                method: "POST",
                url: "/friend",
                body: { friend: 2 },
                headers: { "x-access-token": token }
            });
            res = httpMocks.createResponse();
            check(req, res, controller.save(req, res));
            data = JSON.parse(res._getData());
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
        let req, res, data;
        before(() => {
            req = httpMocks.createRequest({
                method: "get",
                url: "/friend",
                headers: { "x-access-token": token }
            });
            res = httpMocks.createResponse();
            check(req, res, controller.save(req, res));
            data = JSON.parse(res._getData());
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
        let req, res, data;
        before(() => {
            req = httpMocks.createRequest({
                method: "delete",
                url: "/friend",
                body: 2,
                headers: { "x-access-token": token }
            });
            res = httpMocks.createResponse();
            check(req, res, controller.save(req, res));
            data = JSON.parse(res._getData());
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
