import { expect } from "chai";
import { auth, TestCaseUtile } from "../../utile";
import { read } from "../talkRoom.controller";
import { createMocks } from "node-mocks-http";

const { convertMiddlewareToPromise, getData } = TestCaseUtile;

export const readTestCase = token => {
    describe("return success", () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: "GET",
                    params: 1,
                    headers: { "x-access-token": token }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(read, promiseData)
                )
                .then(promiseData => (data = getData(promiseData)));
        });

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));
    });

    describe("return fail", () => {
        describe("token null", () => {
            let data;
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: "GET",
                        params: 1
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(read, promiseData)
                    )
                    .then(promiseData => (data = getData(promiseData)));
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should return fail", () =>
                expect(data.success).to.be.equal(false));

            it("should return message ", () =>
                expect(data.message).to.be.equal("not loggged in"));
        });

        describe("params null", () => {
            let data;
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: "GET",
                        headers: { "x-access-token": token }
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(read, promiseData)
                    )
                    .then(promiseData => (data = getData(promiseData)));
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should return fail", () =>
                expect(data.success).to.be.equal(false));
        });
    });
};
