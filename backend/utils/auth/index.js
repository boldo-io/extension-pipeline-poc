const debug = require("debug")("backend:utils:auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALTROUNDS || 10;
const JWT_SECRET = process.env.JWT_SECRET;

const hashPassword = txt => new Promise((resolve, reject) => {
  bcrypt.hash(txt, BCRYPT_SALT_ROUNDS, (err, hash) => {
    if(err) return reject(err);
    resolve(hash);
  });
});

const validatePassword = (txt, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(txt, hash, (err, result) => {
    if(err) return reject(err);
    resolve(result);
  });
});

// TODO: add iat and expireIn in human readable form in the future.
const encodeJWT = payload => new Promise((resolve, reject) => {
  jwt.sign(payload, JWT_SECRET, (err, token) => {
    if(err) return reject(err);
    resolve(token);
  });
});

// TODO: use `ms` (the vercel library) to get miliseconds back to invalidate tokens with expireIn + iat.
const decodeJWT = token => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err) return reject(err);
    resolve(decoded);
  });
});

module.exports = {
  hashPassword,
  validatePassword,
  encodeJWT,
  decodeJWT
};