const oddsAndEvens = require('../oddsAndEvens')

describe("OddsAndEvens", () => {
    test("Checks zero outputs a string stating it's Even", () => {
        const number = 0
        expect(oddsAndEvens(number)).toEqual("Even")
    })

    test("Checks an even number and outputs a string stating it's Even", () => {
        const number = 2
        expect(oddsAndEvens(number)).toEqual("Even")
    })

    test("Checks an odd number and outputs a string stating it's Odd", () => {
        const number = 3

        expect(oddsAndEvens(number)).toEqual("Odd")
    })

    test("Checks an odd number and outputs a string stating it's Odd", () => {
        const number = -7

        expect(oddsAndEvens(number)).toEqual("Odd")
    })
})