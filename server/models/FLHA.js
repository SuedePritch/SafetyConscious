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
                ref:"JobTask"
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
flhaSchema.virtual("JobTask",{
    ref:'JobTask',
    localField:'jobTask',
    foreignField: '_id',

})

const FLHA = model('FLHA', flhaSchema);

module.exports = FLHA;