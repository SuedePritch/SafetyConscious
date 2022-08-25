const { Schema, model } = require('mongoose');

const flhaSchema = new Schema(
    {
        jobLocation: {
            type: String,
            required: true
        },
        dateCreated:{
            type: Date,
            default: Date.now()
        },
    }
);


const FLHA = model('FLHA', flhaSchema);

module.exports = FLHA;