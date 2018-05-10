var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeFixed is a prototype that represents fixed type
 * value needs to be between 8 and 256 bits, decimal points are between
 * 0 to 80 inclusive 
 */

 var SolidityTypeFixed = function () {
 	this._inputFormatter = f.formatInputFixed;
    this._outputFormatter = f.formatOutputFixed;
 };

SolidityTypeFixed.prototype = new SolidityType({});
SolidityTypeFixed.prototype.constructor = SolidityTypeFixed;

SolidityTypeFixed.prototype.isType = function (name) {
	return !!name.match(/^fixed([89]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-6])x([0-9]|[1-7][0-9]|80)$/);
};
 
module.exports = SolidityTypeFixed;