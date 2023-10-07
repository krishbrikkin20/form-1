const mongoose = require('mongoose')

const form1Schema = mongoose.Schema({
    componyName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    appLink: {
        type: String,
        required: true
    },
    location: {
        type: String,
        enum: ['abuja', 'enugu', 'lagos'],
        required: true
    },
    jobType: {
        type: String,
        enum: ['full_time', 'part_time', 'internship'],
        required: true
    },
    department: {
        type: String,
        enum: ['engineering', 'design', 'customer_support'],
        required: true
    },
    choice: {
        type: String,
    },
    technology: [{
        type: String,
    }]
});

module.exports = Form1 = mongoose.model('Form1', form1Schema)