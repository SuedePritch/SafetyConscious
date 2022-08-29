const { Schema, model } = require('mongoose');

const jobTaskSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        hazard: {
            type: String,
            required: true
        },
        control: {
            type: String,
            required: true
        },
    }
);


const JobTask = model('JobTask', jobTaskSchema);

module.exports = JobTask;