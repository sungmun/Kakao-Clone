import chai, { expect } from "chai";
import http from "chai-http";
import { expect } from "chai";
import httpMocks from "node-mocks-http";
import { check } from "../utile";
import controller from "./friend.controller";

chai.use(http);

const url = "http://localhost:5000";
const user = {
    platformName: "google",
    socialId: "tjdans174@gmail.com"
};

const ErrorProcess = err => console.log(err);

const resCheack = res => {
    expect(res.body).have.property("success");
    expect(res.body).have.property("message");
    return res.body;
};

const getToken = new Promise((resolve, reject) => {
    chai.request(url)
        .post("/user")
        .send({ user })
        .then(resCheack)
        .then(res => {
            expect(res.body.success).to.be.equal(true);
            expect(res.body.message).have.property("token");
            return res.body.message.token;
        })
        .then(resolve)
        .catch(reject);
});

describe("friend.Controller", () => {
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
