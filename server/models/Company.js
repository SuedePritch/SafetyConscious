const { Schema, model } = require('mongoose');

const companySchema = new Schema(
    {
        company:{
            type: String,
            unique:true,
            required:true
        }
    }
)

const Company = model('Company', companySchema);

module.exports = Company;