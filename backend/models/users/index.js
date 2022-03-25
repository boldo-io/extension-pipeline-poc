const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

const createActivationHash = () => crypto.randomBytes(64).toString("hex");

const UserSchema = new Schema({
  username: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, select: false },
  active: { type: Boolean, default: true },
  super: { type: Boolean, default: false },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: false },
  activationHash: { type: String, default: createActivationHash, select: false },
  avatar: { type: String, default: null }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

UserSchema.plugin(require("mongoose-autopopulate"));
UserSchema.plugin(require("mongoose-paginate-v2"));

const User = mongoose.model("User", UserSchema);

module.exports = User;