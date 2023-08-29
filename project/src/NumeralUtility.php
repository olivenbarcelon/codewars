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
}
