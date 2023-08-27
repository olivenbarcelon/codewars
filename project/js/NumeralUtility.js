"use strict";

class NumeralUtility {
    /**
     * @title Square Every Digit
     * @description Welcome. In this kata, you are asked to square every digit of a number and concatenate them. Note: The function accepts an integer and returns an integer.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
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

        return k >= 1 ? k : -1;
    }
}

module.exports = NumeralUtility;
