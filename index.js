'use strict';

const MCCMNC = require('mccmnc.json');

exports.grok = function (imsi) {
    // check if supplied IMSI number looks OK
    if (typeof imsi != 'string')
        throw new Error('Invalid IMSI type (expected string)');
    if (!imsi)
        throw new Error('Empty IMSI');
    if (!/^\d+$/.test(imsi))
        throw new Error('Invalid IMSI (contains non-digits)');

    // try prefix of length 6
    let entry6 = MCCMNC[ imsi.substr(0, 6) ];
    if (entry6) {
        entry6.msin = imsi.substr(6);
        return entry6;
    }

    // try prefix of length 5
    const entry5 = MCCMNC[ imsi.substr(0, 5) ];
    if (entry5) {
        entry5.msin = imsi.substr(5);
        return entry5;
    }

    // not found
    return null;
}
