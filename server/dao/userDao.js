const User = require('../models/userModels');

exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

exports.saveUser = async (user) => {
    const newUser = new User(user);
    await newUser.save();
};
