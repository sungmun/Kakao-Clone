import { createMocks } from "node-mocks-http";
import { TestCaseUtile } from "../utile";
import { login } from "../user/user.controller";

import { TestCase } from "./testCase";

describe("talkRoom.Controller", () => {
    let token;

    before(() =>
        TestCaseUtile.convertMiddlewareToPromise(
            login,
            createMocks({
                method: "POST",
                body: {
                    user: {
                        platformName: "google",
                        socialId: "tjdans174@gmail.com"
                    }
                }
            })
        )
            .then(TestCaseUtile.getData)
            .then(data => (token = data.message.token))
    );
});
