"use strict";
exports.__esModule = true;
exports.generateIpAddressSalt = void 0;
function generateIpAddressSalt() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var salt = "";
    // Generate a 16-character salt
    for (var i = 0; i < 16; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        salt += characters[randomIndex];
    }
    return salt;
}
exports.generateIpAddressSalt = generateIpAddressSalt;
console.log(generateIpAddressSalt());
