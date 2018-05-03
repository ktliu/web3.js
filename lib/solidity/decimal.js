var f = require('./formatters');
var SolidityType = require('./type');

/**
 * SolidityTypeDecimal is a prototype that represents decimal type
 *
 *
 *
 */

 var SolidityTypeDecimal = function () {
 	this._inputFormatter = f.formatInputDecimal;
    this._outputFormatter = f.formatOutputDecimal;
 };

SolidityTypeDecimal.prototype = new SolidityType({});
SolidityTypeDecimal.prototype.constructor = SolidityTypeDecimal;

SolidityTypeDecimal.prototype.isType = function (name) {
	return !!name.match(/^decimal10(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeDecimal;
