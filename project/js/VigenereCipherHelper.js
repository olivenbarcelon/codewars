"use strict";

class VigenereCipher {
    key;

    constructor(key) {
        this.key = key;
    }

    #privateKey = (message, key) => {
        let k = key.split("");
        if(message.length != k.length) {
            let temp = k.length;
            for(let i = 0;i < (message.length - temp);i++) {
                k.push(k[i % temp]);
            }
        }
        return k.join("");
    }

    encode = (message) => {
        const privateKey = this.#privateKey(message, this.key);
        let encode = "";
        for(let i = 0;i < message.length;i++) {
            let mk = (message[i].charCodeAt(0) + privateKey[i].charCodeAt(0) - (96 * 2));
            encode += String.fromCharCode(mk % 26 + 95);
        }
        return encode;
    }

    decode = (message) => {
        const privateKey = this.#privateKey(message, this.key);
        let decode = "";
        for(let i = 0 ;i < message.length;i++) {
            let x = (message[i].charCodeAt(0) - privateKey[i].charCodeAt(0) + 26) % 26;
            x += 'A'.charCodeAt(0);
            decode += String.fromCharCode(x);
        }
        return decode.toLowerCase();
    }
}

module.exports = VigenereCipher;
