const debug = require("debug")("backend:mongodb");
const mongoose = require("mongoose");

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DBNAME,
  MONGO_URI
} = process.env;


mongoose.connect(`mongodb+srv://${MONGO_URI}/${MONGO_DBNAME}?retryWrites=true&w=majority`,
  {
    user: MONGO_USER,
    pass: MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).catch(debug);

mongoose.connection.on("error", (err) => {
  debug(err);
});

mongoose.connection.on("connected", () => {
  debug("mongoose connected");
});

mongoose.connection.on("disconnected", () => {
  debug("mongoose disconnected");
});

mongoose.connection.on("reconnected", () => {
  debug("mongoose reconnected");
});

const User = require("./users");
const CodeBlock = require("./codeBlock");

module.exports = {
  mongooseConnection: mongoose.connection,
  User,
  CodeBlock
};