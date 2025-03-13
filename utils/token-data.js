const jwt = require('jsonwebtoken');

function getDataFromToken(token) {
    try {
        const secretKey = process.env.JWT_SECRET; 
        const decoded = jwt.verify(token, secretKey);
        return decoded; 
    } catch (error) {
        return { error: "Invalid or expired token" };
    }
}

module.exports = {
    getDataFromToken
};