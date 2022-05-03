const hmac = require('./hmac');

test('Returns a valid HMAC token for given data', () => {
    expect(hmac.getHMACToken('dfsdfsdfsfsdf')).toBe("643547db572a674b76f9bc98593017a8c0f3bcd127d8d48c1dd82a04eed88b36")
})

test('This is a failed test', () => {
    expect(hmac.getHMACToken('dfsdfsdfsfsdf11')).toBe("643547db572a674b76f9bc98593017a8c0f3bcd127d8d48c1dd82a04eed88b36")
})