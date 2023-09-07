<?php

namespace Src;

class StringUtility {
    /**
     * Title: Counting Duplicates
     * Description:
     * Count the number of Duplicates
     * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
     * @param string $text
     * @return integer
     */
    public static function duplicateCount(string $text): int {
        // My Solution
        $array = array_map(function ($m) {
            return $m > 1 ? 1 : 0;
        }, array_values(array_count_values(str_split(strtolower($text)))));
        return array_sum($array);

        // Codewars Solution (Yuno_Gassai)
        // return count(array_filter(array_count_values(str_split(strtolower($text))), function($v) {return $v>1;}));
    }
}
