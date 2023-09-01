"use strict";

class StringUtility {
    /**
     * @title RGB To Hex Conversion
     * @description
     * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
     * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
     * @param {int} r 
     * @param {int} g 
     * @param {int} b 
     * @returns {string}
     */
    static toHex = (r, g, b) => {
        r = r < 0 ? 0 : (r >= 255 ? 255 : r);
        g = g < 0 ? 0 : (g >= 255 ? 255 : g);
        b = b < 0 ? 0 : (b >= 255 ? 255 : b);
        return r.toString(16).padStart(2,"0").toUpperCase() + g.toString(16).padStart(2,"0").toUpperCase() + b.toString(16).padStart(2,"0").toUpperCase();
    }

    /**
     * @title Which are in?
     * @description
     * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
     * Notes:
     * Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
     * In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
     * Beware: In some languages r must be without duplicates.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023-08-31
     * @param {string[]} array1 
     * @param {string[]} array2 
     * @returns {string[]}
     */
    static inArray = (array1, array2) => {
        return Array.from(array1).filter(f => Array.from(array2).some(s => s.includes(f))).sort();
    }

    /**
     * @title Exes and Ohs
     * @description Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023-08-28
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
     * @createdAt 2023-08-28
     * @param {string} text 
     * @returns {string}
     */
    static getMiddle = (text) => {
        if(typeof(text) === 'number') throw new Error('Cannot read properties of string');
        return text.substring((text.length - 1) / 2, (text.length + 1) - text.length / 2);
    };
}

module.exports = StringUtility;
