const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeBlockSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  lang: { type: String, required: true },
  code: { type: String, required: true }
});

const CodeBlock = mongoose.model("CodeBlock", CodeBlockSchema);

module.exports = CodeBlock;