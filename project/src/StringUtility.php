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

    /**
     * Title: Replace With Alphabet Position
     * Description:
     * Welcome.
     * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
     * If anything in the text isn't a letter, ignore it and don't return it.
     * "a" = 1, "b" = 2, etc.
     * @param string $s
     * @return string
     */
    public static function alphabetPosition(string $s): string {
        // My Solution
        $f = array_filter(str_split(strtolower($s)), function ($f) {
            return preg_match('/[a-zA-Z]/', $f);
        });
        $m = array_map(function ($m) {
            return ord($m) & (31);
        }, $f);
        return implode(' ', $m);

        // Codewars Solution (khlivnyuk)
        // preg_match_all('/[a-z]/', strtolower($s), $out);
        // return join(' ', array_map(function($ch){return ord($ch) - 96;}, $out[0]));
    }

    /**
     * @param string $text
     * @param integer $n
     * @return string
     */
    public static function splitAlternate(string $text, int $n): string {
        $d = str_split($text);
        for($i = 0;$i < $n;$i++) {
            $l = '';
            $r = '';
            for($ctr = 0;$ctr < count($d);$ctr++) {
                if($ctr % 2 != 0) {
                    $l .= $d[$ctr];
                }
                else {
                    $r .= $d[$ctr];
                }
            }
            $d = str_split($l . $r);
        }
        return implode('', $d);
    }
}
