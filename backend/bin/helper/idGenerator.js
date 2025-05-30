const crypto = require('crypto');

function generateMetricId(countryCode) {
    const timestamp = new Date().getTime();
    const randomString = crypto.randomBytes(4).toString('hex');
    return `${countryCode}-${timestamp}-${randomString}`;
}

module.exports = { generateMetricId };
