import assert from "assert";

import * as utils from"../utils/utils.js";

describe("Utils", () => {
    it("should return greeting RunMotion", () => {
        const name = 'RunMotion';
        assert.strictEqual(utils.greeting(name), `Hello ${name}! How are you?`);
    });
    it("should return greeting user", () => {
        assert.strictEqual(utils.greeting(), `Hello you! How are you?`);
    });
});
