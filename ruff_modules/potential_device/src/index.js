'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        this._adc = inputs['adc'];
    },

    exports: {
        getInputVoltage: function (callback) {
            this._adc.getVoltage(function (error, voltage) {
                if (error) {
                    callback(error);
                    return;
                }

                callback(undefined, voltage + 'v');
            });
        }
    }
});