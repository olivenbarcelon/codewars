"use strict";
const ObjectUtility = require("./ObjectUtility");

class NumeralUtility {
    /**
     * @title Large Factorials
     * @description
     * In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
     * Your mission is simple: write a function that takes an integer n and returns the value of n!.
     * You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.04
     * @param {int} n
     * @returns {string}
     */
    static factorial = (n) => {
        if(!n) {
            return `1`;
        }
        let arr = [n];
        for(;n-- > 1;) {
            let add = 0;
            arr = arr.reduceRight((pre, val) => (add += val * n, pre.unshift(add % 10), add = add / 10 ^ 0, pre), []);
            if(add) {
                arr = [...`${add}`].concat(arr);
            }
        }
        return arr.join(``);
    };

    /**
     * @title Josephus Survivor
     * @description In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.03
     * @param {int} n
     * @param {int} k
     * @returns {int}
     */
    static josephusSurvivor = (n, k) => n < 1 ? 1 : (this.josephusSurvivor(n - 1, k) + --k) % n + 1;

    /**
     * @title Perimeter of squares in a rectangle
     * @description
     * The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.26
     * @param {int} n
     * @returns {int}
     */
    static perimeter = (n) => {
        let sum = 0;
        this.fibonacci(n + 1).forEach(fe => sum += fe);
        return sum * 4;
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.25
     * @param {int} n
     * @returns {int[]}
     */
    static fibonacci = (n) => {
        let f = new Array();
        for(let i = 0;i <= n;i++) {
            if(i == 0 || i == 1) {
                f.push(i);
            }
            else {
                f.push(f[i - 2] + f[i - 1]);
            }
        }
        return f;
    }

    /**
     * @title Are they the "same"?
     * @description
     * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.23
     * @param {int[]} a
     * @param {int[]} b
     * @returns {boolean}
     */
    static compSame = (a, b) => {
        return !!a && !!b && a.sort().join() == b.map(m => Math.sqrt(m)).sort().join();
    }

    /**
     * @title Is a number prime
     * @description
     * Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
     * Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.22
     * @param {int} num
     * @param {int} i
     * @returns {boolean}
     */
    static isPrime = (num, i = 5) => {
        if(num <= 1){
            return false;
        }

        if(num == 2 || num == 3) {
            return true;
        }

        if(num % 2 == 0 || num % 3 == 0) {
            return false;
        }

        if(i <= Math.sqrt(num)) {
            if(num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
            return this.isPrime(num, i + 6)
        }
        return true;
    }

    /**
     * @title Greed is Good
     * @description
     * Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.20
     * @param {int[]} arr
     * @returns {int}
     */
    static greedIsGood = (arr) => {
        let o = ObjectUtility.arrayCountValues(arr);
        let score = [1000, 200, 300, 400, 500, 600];
        let sum = 0;
        Object.entries(o).filter(entry => entry[1] >= 3 || entry[0] == 1 || entry[0] == 5)
            .map(entry => {
                let c = 0;
                let k = entry[0];
                let v = entry[1];
                if(v == 3 || (k != 1 && k != 5)) {
                    c = score[k - 1];
                }
                else if(k == 1) {
                    if(v < 3) {
                        c = v * 100;
                    }
                    else {
                        c = score[k - 1] + v % 3 * 100;
                    }
                }
                else {
                    if(v < 3) {
                        c = v * 50;
                    }
                    else {
                        c = score[k - 1] + v % 3 * 50;
                    }
                }
                return c;
            })
            .forEach(e => sum += e);
        return sum;
    }

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
