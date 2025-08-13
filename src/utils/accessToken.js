const jwt = require("jsonwebtoken");

class accessToken {
  create = (payload, options = {}) => {
    try {
      return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_LIFETIME,
        ...options,
      });
    } catch (error) {
      return null;
    }
  };

  verify = (token) => {
    try {
      return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
      return null;
    }
  };
}

module.exports = new accessToken();
