const { User, FLHA, Company} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



const resolvers = {
  Query: {
    //USER
    //Single User
    user: async (parent, { _id }, context)=> {  
      if (context.user) {
      return User.findOne({
          _id: context.user._id 
          });
      }
      throw new AuthenticationError('You need to be logged in!');
  
    },
    // Company
    companies: async () =>{
      return await Company.find()
    },
    //Employees
    employees: async (parent, {company}, context) =>{
      return await User.find({
        company: context.user.company
      });
    },

    //FLHA
    //all FLHAs
    allFLHAs: async () => {
      return await FLHA.find().populate("user");
    },
    allJobTasks: async ()=>{
      return await FLHA.find().populate("user");
    },
    flhasByUser:async (parent, {company}, context) => {
      return FLHA.find({
        company: context.user.company
      }).populate("user").sort("user");
    }


  },



  Mutation: {
    //USER
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

       // Company
      addCompany: async (parent, args) =>{
        return await Company.create(args)
      },

      //Safety Ticket
      addSafetyTicket: async (parent, {user, safetyticket}) => {
        return await User.findByIdAndUpdate(
          user, { $push: { safetytickets: safetyticket}}, {new: true}
        )
      },
  

    //FLHA
    submitFLHA: async ( parent, args) => {
      return await FLHA.create(args)
    },
    
    approveFLHA: async (parent, {_id, isApproved}) =>{
      return await FLHA.findByIdAndUpdate(_id, { $set: { isApproved: isApproved}}, {new: true})
    }

    }
};

module.exports = resolvers;
