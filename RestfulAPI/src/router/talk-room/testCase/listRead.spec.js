import { expect } from "chai";
import { auth, TestCaseUtile } from "../../utile";
import { listRead } from "../talkRoom.controller";

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export const listReadTestCase = token => {
    describe("return success", () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(auth, setTokenMocks("GET", null, token))
                .then(promiseData =>
                    convertMiddlewareToPromise(listRead, promiseData)
                )
                .then(promiseData => (data = getData(promiseData)));
        });

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));
    });

    describe("return fail", () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(auth, setTokenMocks("GET", null, null))
                .then(promiseData =>
                    convertMiddlewareToPromise(listRead, promiseData)
                )
                .then(promiseData => (data = getData(promiseData)));
        });

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));

        it("should return fail", () => expect(data.success).to.be.equal(false));

        it("should return message ", () =>
            expect(data.message).to.be.equal("not loggged in"));
    });
};
