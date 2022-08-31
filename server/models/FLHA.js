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
            task:{
                type:String,
                required:true
            },
            hazard:{
                type:String,
                required:true
            },
            control:{
                type:String,
                required:true
            }
        }],
        dateCreated:{
            type: Date,
            default: Date.now()
        },
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const FLHA = model('FLHA', flhaSchema);

module.exports = FLHA;