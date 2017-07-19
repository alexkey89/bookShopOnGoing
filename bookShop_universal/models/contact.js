"use strict";
var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    firstName: String,
    bookRequest: String,
    price: Number
})

var Messages = mongoose.model('Messages', contactSchema);

module.exports = Messages;

