'use strict';

module.exports = function(message, error, success) {
  this.message = message;
  this.error = error;
  this.success = success;
  this.stack = (new Error()).stack;
};
module.exports.prototype = Object.create(Error.prototype);
module.exports.prototype.name = 'PartialError';