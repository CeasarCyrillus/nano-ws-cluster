import {helloWorld} from "../index";

describe("helloWorld", () => {
    it("returns 'Hello World!'", () => {
        const expected = "Hello World!"

        const actual = helloWorld()

        expect(actual).toEqual(expected)
    })
})