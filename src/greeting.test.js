const greeting = require('./greeting')

test('Simple Greeting', () => {
    expect(greeting("Bob")).toBe("Hello, Bob.");
});

test('Handle nulls name', () => {
    expect(greeting(null)).toBe("Hello, my friend.");
});

test('Handle shouted greeting', () => {
    expect(greeting("JERRY")).toBe("HELLO JERRY!");
});

test('Handle two names', () => {
    expect(greeting(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});
