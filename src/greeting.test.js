const greeting = require('./greeting')

test('simple greeting', () => {
    expect(greeting('Bob')).toBe("Hello, Bob.");
    expect(greeting('Amy')).toBe("Hello, Amy.");
});
test('stand-in greeting', () => {
    expect(greeting(null)).toBe("Hello, my friend.");
});

test('shouting greeting', () => {
    expect(greeting('JERRY')).toBe("HELLO JERRY!");
});

test('two name greeting', () => {
    expect(greeting(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

// red / green / refactor
// extract variable, extract function
// inline variable, inline function
