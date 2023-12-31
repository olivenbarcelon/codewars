"use strict";
const ObjectUtility = require("./ObjectUtility");

class StringUtility {
    /**
     * @title Objectify a URL Query String
     * @description
     * In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.05
     * @param {string} query
     * @returns {Object}
     */
    static convertQueryToMap = query => query.split(`&`).map(val => val.split(/[=.]/)).reduce((obj, arr) => {
        const value = arr.pop();
        arr.reduce((pre, val, idx) => pre[val] = ++idx === arr.length ? decodeURIComponent(value) : pre[val] || {}, obj);
        return obj;
    }, {});

    /**
     * @title String incrementer
     * @description
     * Your job is to write a function which increments a string, to create a new string.
     * If the string already ends with a number, the number should be incremented by 1.
     * If the string does not end with a number. the number 1 should be appended to the new string.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.02
     * @param {string} str
     * @returns {string}
     */
    static stringIncrementer = (str) => str.replace(/[0-8]?9*$/, val => ++val);

    /**
     * @title The Hashtag Generator
     * @description
     * The marketing team is spending way too much time typing in hashtags.
     * Let's help them with our own Hashtag Generator!
     * Here's the deal:
     * It must start with a hashtag (#).
     * All words must have their first letter capitalized.
     * If the final result is longer than 140 chars it must return false.
     * If the input or the result is an empty string it must return false.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.01
     * @param {string} str
     * @returns {string|boolean}
     */
    static generateHashtag = (str) => {
        let hashtag = str.split(' ').reduce((tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1), '#');
        return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
    }

    /**
     * @title Sum Strings as Numbers
     * @description Given the string representations of two integers, return the string representation of the sum of those integers.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.24
     * @param {string} a
     * @param {string} b
     * @returns {string}
     */
    static findSum = (a, b) => {
        if(a.length == 0 || b.length == 0) {
            if(a.length > b.length) {
                return a;
            }
            else {
                return b;
            }
        }
        let s1;
        let s2;
        let result;
        if(/^[(0-9).(0-9)]*$/.test(a)) {
            s1 = BigInt(a);
        }
        if(/^[(0-9).(0-9)]*$/.test(b)) {
            s2 = BigInt(b);
        }
        result = s1 + s2;
        return result.toString();
    }

    /**
     * @title Highest Scoring Word
     * @description
     * Given a string of words, you need to find the highest scoring word.
     * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
     * For example, the score of abad is 8 (1 + 2 + 1 + 4).
     * You need to return the highest scoring word as a string.
     * If two words score the same, return the word that appears earliest in the original string.
     * All letters will be lowercase and all inputs will be valid.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.21
     * @param {string} str
     * @returns {string}
     */
    static highestScoreWord = (str) => {
        const score = s => s.split('').reduce((m, i) => m + i.charCodeAt(0) - 96, 0);
        return str.split(' ').reduce((s, n) => score(s) < score(n) ? n : s);
    }

    /**
     * @title Consecutive strings
     * @description
     * You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.19
     * @param {string[]} strarr
     * @param {int} k
     * @returns {string}
     */
    static longestConsec = (strarr, k) => {
        if(k <= 0) {
            return "";
        }
        else if(k == 1) {
            return strarr.reduce((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest, "");
        }
        let a = [];
        for(let i = 0;i < strarr.length - (k - 1);i++) {
            let s = "";
            for(let j = 0;j < k;j++) {
                s += strarr[i + j];
            }
            a.push(s);
        }
        let longest = a.reduce((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest, "");
        return longest;
    }

    /**
     * @title Valid Braces
     * @description
     * Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
     * This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
     * All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
     * What is considered Valid?
     * A string of braces is considered valid if all braces are matched with the correct brace.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.17
     * @param {string} braces
     * @returns {boolean}
     */
    static validBraces = (braces) => {
        let re = /\(\)|\[\]|\{\}/g;
        return re.test(braces) ? this.validBraces(braces.replace(re, '')) : '' === braces;
    }

    /**
     * @title String ends with?
     * @description Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.16
     * @param {string} str1
     * @param {string} str2
     * @returns {boolean}
     */
    static endsWith = (str, ending) => str.endsWith(ending);

    /**
     * @title Mumbling
     * @description This time no story, no theory. The examples below show you how to write function accum
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.12
     * @param {string} str
     * @returns {string}
     */
    static mumbling = (str) => {
        return Object.entries(Array.from(str)).map(entry => {
            let [key, value] = entry;
            let uc = value.toUpperCase();
            return uc.padEnd(Number.parseInt(key) + 1, value.toLowerCase());
        }).join("-");
    }

    /**
     * @title Disemvowel Trolls
     * @description
     * Trolls are attacking your comment section!
     * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
     * Your task is to write a function that takes a string and return a new string with all vowels removed.
     * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
     * Note: for this kata y isn't considered a vowel.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.10
     * @param {string} str
     * @returns {string}
     */
    static removeVowel = (str) => {
        let r = new RegExp("[aeiou]", 'gi');

        return str.replace(r, "");
    }

    /**
     * @title Counting Duplicates
     * @description
     * Count the number of Duplicates
     * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.08
     * @param {string} text
     * @returns {int}
     */
    static duplicateCount = (text) => {
        return Object.values(ObjectUtility.arrayCountValues(Array.from(text.toLowerCase()))).filter(f => f > 1).length;
    }

    /**
     * @title Replace With Alphabet Position
     * @description
     * Welcome.
     * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
     * If anything in the text isn't a letter, ignore it and don't return it.
     * "a" = 1, "b" = 2, etc.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.07
     * @param {string} s
     * @returns {string}
     */
    static alphabetPosition = (s) => {
        return [...s.toLowerCase().matchAll(/[a-z]/g)].map(m => m[0].charCodeAt(0) - 96).join(" ");
    }

    /**
     * @description Split text alternate
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.06
     * @param {string} text
     * @param {int} n
     * @returns {string}
     */
    static splitAlternate = (text, n) => {
        return StringUtility.#shiftAlternate(text, 0, n);
    }

    /**
     * @description Shift or move value
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.06
     * @param {string} text
     * @param {int} offset
     * @param {int} n
     * @returns {string}
     */
    static #shiftAlternate = (text, offset, n) => {
        if(offset < n) {
            let odd = StringUtility.#getValueAtOdd(text, 0);
            let even = StringUtility.#getValueAtEven(text, 0);
            return StringUtility.#shiftAlternate(odd + even, ++offset, n);
        }
        return text;
    }

    /**
     * @description Get all value at index of odd
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.06
     * @param {string} text
     * @param {int} i
     * @returns {string}
     */
    static #getValueAtOdd = (text, i) => {
        if(i < text.length) {
            if(i % 2 != 0) {
                return text[i] + StringUtility.#getValueAtOdd(text, ++i);
            }
            return StringUtility.#getValueAtOdd(text, ++i);
        }
        return "";
    }

    /**
     * @description Get all value at index of even
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.06
     * @param {string} text
     * @param {int} i
     * @returns {string}
     */
    static #getValueAtEven = (text, i) => {
        if(i < text.length) {
            if(i % 2 == 0) {
                return text[i] + StringUtility.#getValueAtEven(text, ++i);
            }
            return StringUtility.#getValueAtEven(text, ++i);
        }
        return "";
    }

    /**
     * @title Meeting
     * @description
     * John has invited some friends. His list is:
     * s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
     * Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name.
     * When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
     * So the result of function meeting(s) will be:
     * "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
     * It can happen that in two distinct families with the same family name two people have the same first name too.
     * Notes
     * You can see another examples in the "Sample tests".
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.04
     * @param {string} s
     * @returns {string}
     */
    static meeting = (s) => {
        return s.toUpperCase().split(";").map(m => m.replace(/(\w+):(\w+)/gi, "($2, $1)")).sort().join("");
    }

    /**
     * @title Split Strings
     * @description Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.03
     * @param {string} str
     * @returns {string[]}
     */
    static splitString = (str) => {
        if(str === "") return [];
        return str.concat("_").match(/\w{2}/g);
    }

    /**
     * @title Convert string to camel case
     * @description
     * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.02
     * @param {string} str
     * @returns {string}
     */
    static toCamelCase = (str) => {
        return StringUtility.#pregReplaceCallback(/[_-](\w)/gm, matches => matches[1].toUpperCase(), str);
    }

    /**
     * @title Preg Replace Callback
     * @description Function same as preg_replace_callback of PHP
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.02
     * @param {RegExp} pattern
     * @param {Function} callback
     * @param {string} string
     * @returns {string}
     */
    static #pregReplaceCallback = (pattern, callback, string) => {
        [...string.matchAll(pattern)].forEach(value => {
            string = string.replace(value[0], callback(value));
        });
        return string;
    }

    /**
     * @title RGB To Hex Conversion
     * @description
     * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
     * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.01
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
     * @createdAt 2023.08.31
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
     * @createdAt 2023.08.28
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
     * @createdAt 2023.08.28
     * @param {string} text
     * @returns {string}
     */
    static getMiddle = (text) => {
        if(typeof(text) === 'number') throw new Error('Cannot read properties of string');
        return text.substring((text.length - 1) / 2, (text.length + 1) - text.length / 2);
    };
}

module.exports = StringUtility;
