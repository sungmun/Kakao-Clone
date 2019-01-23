import { expect } from "chai";
import { createRequest, createResponse, createMocks } from "node-mocks-http";
import { auth, convertMiddlewareToPromise } from "../utile";
import { login, cheack } from "./user.controller";

const user = {
    platformName: "google",
    socialId: "tjdans174@gmail.com"
};

const postReq = params => ({
    method: "POST",
    url: "/login",
    body: params
});

const getReq = params => ({
    method: "GET",
    url: "/login",
    headers: params
});

describe("User.Controller", () => {
    describe("User login Test", () => {
        describe("should return error", () => {
            let data;
            before(() => {
                const { req, res } = createMocks(postReq());

                return convertMiddlewareToPromise(login, req, res).then(
                    () => (data = JSON.parse(res._getData()))
                );
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should the success false", () =>
                expect(data.success).to.be.equal(false));
        });

        describe("should return the token", () => {
            let data;
            before(() => {
                const { req, res } = createMocks(postReq({ user }));

                return convertMiddlewareToPromise(login, req, res).then(
                    () => (data = JSON.parse(res._getData()))
                );
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should the success true", () =>
                expect(data.success).to.be.equal(true));

            it("should the token", () =>
                expect(data.message).have.property("token"));
        });
    });

    describe("User login cheack Test", () => {
        describe("should return error", () => {
            let data;
            before(() => {
                const { req, res } = createMocks(postReq());

                return convertMiddlewareToPromise(auth, req, res)
                    .then(() => convertMiddlewareToPromise(cheack, req, res))
                    .then(() => (data = JSON.parse(res._getData())));
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should the success false", () =>
                expect(data.success).to.be.equal(false));
        });

        describe("should return the profile", () => {
            let data;

            before(() => {
                let { req, res } = createMocks(postReq({ user }));
                return convertMiddlewareToPromise(login, req, res)
                    .then(() => JSON.parse(res._getData()).message.token)
                    .then(token => {
                        req = createRequest(
                            getReq({ "x-access-token": token })
                        );
                        res = createResponse();
                        return convertMiddlewareToPromise(auth, req, res);
                    })
                    .then(() => convertMiddlewareToPromise(cheack, req, res))
                    .then(() => (data = JSON.parse(res._getData())));
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should the profile", () =>
                expect(data.message.profile).to.have.all.keys(
                    "id",
                    "createdAt",
                    "updatedAt",
                    "socialId",
                    "platformName",
                    "nickName",
                    "photos"
                ));
        });
    });
});
