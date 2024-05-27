import assert from "assert";

import * as maths from"../utils/maths.js";

describe("Maths", () => {
    it("should return 8", () => {
        assert.strictEqual(maths.sum(3, 5), 8);
    });
    it("should return 3", () => {
        assert.strictEqual(maths.substract(8, 5), 3);
    });
    it("should return 10", () => {
        assert.strictEqual(maths.multiply(2, 5), 10);
    });
});
