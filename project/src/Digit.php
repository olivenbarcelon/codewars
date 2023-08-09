<?php

namespace Src;

class Digit {
    /**
     * Title: Square Every Digit
     * Description:
     * Welcome. In this kata, you are asked to square every digit of a number and concatenate them. Note: The function accepts an integer and returns an integer.
     * @param integer $data
     * @return integer
     */
    public static function squareDigit(int $data): int {
        // My Solution
        return (int) join('', array_map(function ($n) {
            return $n * $n;
        }, str_split($data)));

        // Codewars Solution (kan6666)
        // return (int)implode(array_map(function($x){return $x * $x;}, str_split($num)));
    }

    /**
     * Title: Playing with Digits
     * Description:
     * Some numbers have funny properties. For example:
     * 89 --> 8¹ + 9² = 89 * 1
     * 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
     * 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
     * Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:
     * Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
     * If it is the case we will return k, if not return -1.
     * Note: n, p will always be given as strictly positive integers.
     * @param integer $n
     * @param integer $p
     * @return integer
     */
    public static function digPow(int $n, int $p): int {
        // My Solution
        $array = str_split($n);
        for($i = 0;$i < count($array);$i++) {
            $pow[$i] = pow($array[$i], $i + $p);
        }
        $k = array_sum($pow) / $n;
        return $k >= 1 ? $k : -1;
    }
}
