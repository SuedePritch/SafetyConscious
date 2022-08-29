const { Schema, model } = require('mongoose');

const jobTaskSchema = new Schema(
    {
        task: {
            type: String,
            required: true,
            unique:false
            
        },
        hazard: {
            type: String,
            required: true,
            unique:false
        },
        control: {
            type: String,
            required: true,
            unique:false
        },
    }
);


const JobTask = model('JobTask', jobTaskSchema);

module.exports = JobTask;