<?php

namespace Src;

class NumeralUtility {
    /**
     * Title: Mean Square Error
     * Description:
     * Complete the function that
     * accepts two integer arrays of equal length
     * compares the value each member in one array to the corresponding member in the other
     * squares the absolute value difference between those two values
     * and returns the average of those squared absolute value difference between each member pair.
     * @param array $a
     * @param array $b
     * @return float|integer
     */
    public static function meanSquare(array $a, array $b): float|int {
        // My Solution
        $count = count($a);
        $sum = 0;
        for($ctr = 0;$ctr < $count;$ctr++) {
            $sum += ($a[$ctr] - $b[$ctr])**2;
        }
        return $sum / $count;

        // Codewars Solution (kirull)
        // return array_sum(array_map(function($x, $y){return ($x-$y)**2;}, $a, $b)) / count($a);
    }

    /**
     * Title: Roman Numerals Encoder
     * Description:
     * Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
     * Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
     * Remember that there can't be more than 3 identical symbols in a row.
     * @param integer $number
     * @return void
     */
    public static function toRoman(int $number): string {
        // My Solution
        $m = array("", "M", "MM", "MMM");
        $c = array("", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM");
        $x = array("", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC");
        $i = array("", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX");
        $thousands = $m[intdiv($number, 1000)];
        $hundreds = $c[intdiv(($number % 1000), 100)];
        $tens = $x[intdiv(($number % 100), 10)];
        $ones = $i[$number % 10];
        $ans = $thousands . $hundreds . $tens . $ones;
        return $ans;

        // Codewars Solution (ejuhjav)
        // $roman = "";
        // $numerals = array("M" => 1000, "CM" => 900, "D" => 500, "CD" => 400, "C" => 100, "XC" => 90, "L" => 50, "XL" => 40, "X" => 10, "IX" => 9, "V" => 5, "IV" => 4, "I" => 1);
        // foreach($numerals as $numeral => $value) {
        //     $roman .= str_repeat($numeral, floor($number / $value));
        //     $number = $number % $value;
        // }
        // return $roman;
    }
}
