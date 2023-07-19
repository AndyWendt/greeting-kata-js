const greeting = require('./greeting')

test('simple greeting', () => {
    expect(greeting("Bob")).toBe("Hello, Bob.");
    expect(greeting("Mike")).toBe("Hello, Mike.");
});

test('Should be handle nulls by introducing a stand-in', () => {
    expect(greeting(null)).toBe("Hello, my friend.");
});

test('Should be handle array', () => {
    expect(greeting(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

test('Should be handle when shouting', () => {
    expect(greeting("JERRY")).toBe("HELLO JERRY!");
});

test('Should be handle array with many names', () => {
    expect(greeting(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});

// red / green / refactor
