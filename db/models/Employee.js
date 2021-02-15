const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = require('../../db');

const employeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  address1: {type: String, required: true},
  address2: String,
  city: String,
  state: String,
  country: {type: String, required: true},
  phone: String,
  email: {type: String, unique: true, required: true},
  wage: {type: Number, required: true},
  startDate: {type: String, required: true},
  position: {type: String, required: true},
  weekHours: {type: Number, default: 0},
  isActive: {type: Boolean, default: true}
}, {
  versionKey: false
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;