const passport = require("passport");
const { User } = require("../models");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const JWTStragegy = new JwtStrategy(options, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if(err) return done(err, false);
    if(user) {
      return done(null, user);
    }
    done("?", false);
  });
});

passport.use(JWTStragegy);

passport.jwt = passport.authenticate("jwt", { session: false });

module.exports = {
  JWTStragegy,
  passport
};