const express = require("express");
const logger = require("morgan");

const { passport } = require("./passport");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const codeBlockRouter = require("./routes/codeBlock");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/codeBlocks", passport.jwt, codeBlockRouter);

module.exports = app;
