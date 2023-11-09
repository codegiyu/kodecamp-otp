require("dotenv").config();
const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");

const cipher1 = AES.encrypt(JSON.stringify({item: "blabla"}), process.env.cryptoSecret);
const cipher2 = AES.encrypt(JSON.stringify({item: "blabla"}), process.env.cryptoSecret);

// console.log({ cipher1, cipher2 });
console.log({ cipher1: cipher1.toString(), cipher2: cipher2.toString() });

const plain1 = AES.decrypt(cipher1, process.env.cryptoSecret);
const plain2 = AES.decrypt(cipher2, process.env.cryptoSecret);

console.log({ plain1: plain1.toString(CryptoJS.enc.Utf8), plain2: plain2.toString(CryptoJS.enc.Utf8) });

const parsed1 = JSON.parse(plain1.toString(CryptoJS.enc.Utf8));
const parsed2 = JSON.parse(plain2.toString(CryptoJS.enc.Utf8));

console.log({ parsed1, parsed2 })