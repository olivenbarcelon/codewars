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
}
