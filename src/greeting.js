function createGreeting(name) {
    let isShouted = name === name.toUpperCase()

    let salutation = isShouted ? 'HELLO' : 'Hello,'
    let endingPunctuation = isShouted ? '!' : '.'

    return `${salutation} ${name}${endingPunctuation}`;
}

module.exports = function(name) {
    if (Array.isArray(name)) {
        name = `${name[0]} and ${name[1]}`;
    }

    name = name ? name : 'my friend';
    return createGreeting(name);
}
