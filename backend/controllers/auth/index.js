const debug = require("debug")("backend:controller:auth");
const { User } = require("../../models");
const {
  hashPassword,
  validatePassword,
  encodeJWT
} = require("../../utils/auth");

const login = async (req, res) => {
   try {
     const {
       username,
       password
     } = req.body;
     
     const user = await User.findOne({ username }).select('+password');

     if(await validatePassword(password, user.password)) {
       const jwt = await encodeJWT({
         sub: user._id,
         id: user._id,
         name: `${user.firstName} ${user.lastName}`,
         firstName: user.firstName,
         lastName: user.lastName,
         phone: user.phone
       });
       return res.json({ jwt });
     }

     res.status(401).json({
       error: "Unauthorized",
       message: "username and password combination do not match",
       status: 401
     });
   }
   catch(e) {
     debug(e);
     res.status(500).json({
       error: "Internal Server Error",
       message: "Internal Server Error",
       status: 500
     });
   }
};

const register = async (req, res) => {
  try {
    const {
      username,
      password,
      password_confirmation,
      firstName,
      lastName,
      phone
    } = req.body;
    if(password !== password_confirmation) {
      return res.status(400).json({
        error: "Bad Request",
        message: "The password provided doesn't match the confirmation",
        status: 400
      });
    }
    if(password.length < 7) {
      return res.status(400).json({
        error: "Bad Request",
        message: "The password provided should at least be 8 characters long",
        status: 400
      });
    }
    if(username.length < 1) {
      return res.status(400).json({
        error: "Bad Request",
        message: "The username provided should be at least 1 character long",
        status: 400
      });
    }
    
    const passwordHash = await hashPassword(password);

    const newUser = new User({
      username,
      password: passwordHash,
      firstName,
      lastName,
      phone
    });

    await newUser.save();

    res.json(await User.findById(newUser._id));
  }
  catch(e) {
    debug(e);
    res.status(500).json({
      error: "Internal Server Error",
      message: "Internal Server Error",
      status: 500
    });
  }
};


module.exports = {
  login,
  register
}