const jwt = require("jsonwebtoken");

const { TOKEN_KEY } = process.env;

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-acces-token"];

    // check proveded token
    if(!token){
        return res.status(403).send("An Authentication token is required");
    }

    try {
        const decodedToken = await jwt.verify(token,TOKEN_KEY);
        req.currentUser = decodedToken;
    } catch (error) {
        return res.status(401).send("Invalid Token Provided")
    }

    // proceed with request
    return next();
};

module.exports = verifyToken;
