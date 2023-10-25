test("One euro should be 1.206 dollars", function() {
    const { EuroToDollar } = require('./app.js');
    const dollars = EuroToDollar(3.5);
    const expected = 3.5 * 1.2;
    expect(dollars).toBe(expected);
});

test("One dollar should be 127.9 yen", function() {
    const { DollarToYen } = require('./app.js');
    const yen = DollarToYen(1);
    const expected = 1 * 127.9;
    expect(yen).toBe(expected);
});

test("One yen should be 0.0055 pounds", function() {
    const { YenToPound } = require('./app.js');
    const pound = YenToPound(1);
    const expected = 1 * 0.0055;
    expect(pound).toBe(expected);
});

