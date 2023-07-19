


module.exports = function(name) {
    let names = buildName(name);
    return buildSentence(names)
}

function buildName(name) {
    if(!name) {
        return 'my friend';
    }

    if(isMultipleNames(name)) {
        return greetingMultipleNames(name);
    }

    return name;
}

function isMultipleNames(name) {
    return Array.isArray(name)
}

function isShouted(names) {
    return names === names.toUpperCase();
}

function buildSentence(names) {
    if(isShouted(names)) {
        return `HELLO ${names}!`;
    }

    return `Hello, ${names}.`;
}

function greetingMultipleNames(name) {
    if(name.length > 2) {
        let lastName = name.pop();
        return  `${name.join(', ')}, and ${lastName}`;
    }

    return `${name.join(' and ')}`;
}
