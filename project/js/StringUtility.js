"use strict";

class StringUtility {
    /**
     * @title Exes and Ohs
     * @description Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @param {string} data 
     * @returns {boolean}
     */
    static exesAndOhs = (data) => {
        let arr = [...data.toLowerCase()];
        let x = 0;
        let o = 0;
        arr.forEach((item) => {
            if(item === 'x') {
                x += 1;
            }
            else if(item === 'o') {
                o += 1;
            }
        });
        return x === o;
    }

    /**
     * @title Get the Middle Character
     * @description You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @param {string} text 
     * @returns {string}
     */
    static getMiddle = (text) => {
        if(typeof(text) === 'number') throw new Error('Cannot read properties of string');
        return text.substring((text.length - 1) / 2, (text.length + 1) - text.length / 2);
    };
}

module.exports = StringUtility;
