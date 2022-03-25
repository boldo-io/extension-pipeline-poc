const { CodeBlock } = require("../../models");

const all = async (req, res) => {};

const get = async (req, res) => {};

const post = async (req, res) => {};

const del = async (req, res) => {};

const put = async (req, res) => {};

const param = async (req, res, next) => {
  try {
    const { cbId } = req.param;
    const codeBlock = await CodeBlock.findOne({ _id: cbId, user: req.user._id });
    if(codeBlock) {
      req.codeBlock = codeBlock;
      return next();
    }
    res.status(404).json({
      error: "Not Found",
      message: "Code Block not found",
      status: 404
    });
  }
  catch(e) {
    res.status(500).json({
      error: "Internal Server Error",
      message: "Internal Server Error",
      status: 500
    });
  }
};

module.exports = {
  all,
  get,
  post,
  del,
  put,
  param
}