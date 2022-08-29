const { Schema, model } = require('mongoose');

const flhaSchema = new Schema(
    {
        jobLocation: {
            type: String,
            required: true,
            unique:false
        },
        supervisor: {
            type: String,
            required: true,
            unique:false
        },
        primarytask: {
            type: String,
            required: true,
            unique:false
        },
        jobTask:[{
                type: Schema.Types.ObjectId,
                ref:'jobTask'
        }],
        dateCreated:{
            type: Date,
            default: Date.now()
        },
    }
);


const FLHA = model('FLHA', flhaSchema);

module.exports = FLHA;