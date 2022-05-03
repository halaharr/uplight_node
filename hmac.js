const crypto = require('crypto');
const config = require('./config/default.json');

function getHMACToken(data) {
    return crypto.createHmac(config.hmac.algorithm, config.hmac.key).update(data).digest('hex');
}

exports.getHMACToken = getHMACToken;