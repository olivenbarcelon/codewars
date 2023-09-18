"use strict";

class NumeralUtility {
    /**
     * @title List Filtering
     * @description In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.11
     * @param {any[]} arr
     * @returns {int[]}
     */
    static filterInt = (arr) => {
        return Array.from(arr).filter(f => typeof(f) === "number");
    }

    /**
     * @title Does my number look big in this?
     * @description A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.09
     * @param {int} n
     * @param {int} i
     * @param {int} result
     * @returns {boolean}
     */
    static isArmstrong = (n, i = 0, result = 0) => {
        let number = new String(n);
        let length = number.length;
        if(i < length) {
            result += parseInt(number[i])**length;
            return this.isArmstrong(n, ++i, result);
        }

        return result == parseInt(number);
    }

    /**
     * @title Mean Square Error
     * @description
     * Complete the function that
     * accepts two integer arrays of equal length
     * compares the value each member in one array to the corresponding member in the other
     * squares the absolute value difference between those two values
     * and returns the average of those squared absolute value difference between each member pair.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.08.30
     * @param {int[]} a 
     * @param {int[]} b 
     * @returns {int|float}
     */
    static meanSquare = (a, b) => {
        let count = a.length;
        let sum = 0;
        Array.from(a, (v, k) => Math.pow((v - b[k]), 2)).forEach(e => sum += e);

        return sum / count;
    }

    /**
     * @title Roman Numerals Encoder
     * @description
     * Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
     * Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
     * Remember that there can't be more than 3 identical symbols in a row.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.08.29
     * @param {int} number 
     * @returns {string}
     */
    static toRoman = (number) => {
        let roman = "";
        let numerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        Object.entries(numerals).forEach(entry => {
            const [key, value] = entry;
            roman += key.repeat(Math.floor(number / value));
            number %= value;
        });

        return roman;
    }

    /**
     * @title Square Every Digit
     * @description Welcome. In this kata, you are asked to square every digit of a number and concatenate them. Note: The function accepts an integer and returns an integer.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.08.27
     * @param {int} data 
     * @returns {int}
     */
    static squareDigit = (data) => {
        let arr = Array.from(String(data), (c) => {
            return c * c;
        });

        return parseInt(arr.join(''));
    }

    /**
     * @title Playing with Digits
     * @description
     * Some numbers have funny properties. For example:
     * 89 --> 8¹ + 9² = 89 * 1
     * 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
     * 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
     * Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:
     * Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
     * If it is the case we will return k, if not return -1.
     * Note: n, p will always be given as strictly positive integers.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.08.26
     * @updatedAt 2023.09.18
     * @param {int} n 
     * @param {int} p 
     * @returns {int}
     */
    static digPow = (n, p) => {
        let input = [...n.toString()].map(Number);
        let sumOfPow = 0;
        for(let i = 0;i < input.length;i++) {
            sumOfPow += Math.pow(input[i], i + p);
        }
        let k = sumOfPow / n;
        return Number.isInteger(k) ? k : -1;
    }
}

module.exports = NumeralUtility;
