<?php

namespace Src;

class StringUtility {
    /**
     * Title: RGB To Hex Conversion
     * Description:
     * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
     * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
     * @param integer $r
     * @param integer $g
     * @param integer $b
     * @return string
     */
    public static function toHex(int $r, int $g, int $b): string {
        // My Solution
        $r = $r < 0 ? 0 : ($r >= 255 ? 255 : $r);
        $g = $g < 0 ? 0 : ($g >= 255 ? 255 : $g);
        $b = $b < 0 ? 0 : ($b >= 255 ? 255 : $b);
        return strtoupper(str_pad(dechex($r), 2, "0", STR_PAD_LEFT)) . strtoupper(str_pad(dechex($g), 2, "0", STR_PAD_LEFT)) . strtoupper(str_pad(dechex($b), 2, "0", STR_PAD_LEFT));

        // Codewars Solution (khlivnyuk)
        // return vsprintf('%02X%02X%02X', array_map(function ($v) { return min(max($v, 0), 255); }, [$r, $g, $b]));
    }

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

    /**
     * Title: Meeting
     * Description:
     * John has invited some friends. His list is:
     * s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
     * Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name.
     * When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
     * So the result of function meeting(s) will be:
     * "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
     * It can happen that in two distinct families with the same family name two people have the same first name too.
     * Notes
     * You can see another examples in the "Sample tests".
     * @param string $s
     * @return string
     */
    public static function meeting(string $s): string {
        // My Solution
        $a = array_map(function ($m) {
            $s = preg_split('/:/', $m);
            return '(' . $s[1] . ', ' . $s[0] . ')';
        }, preg_split('/;/', strtoupper($s)));
        sort($a);
        return implode('', $a);

        // Codewars Solution (ejini战神)
        // $arr = explode(";", preg_replace("/(\w+):(\w+)/", "($2, $1)", strtoupper($s)));
        // sort($arr);
        // return implode("", $arr);
    }

    /**
     * Title: Split Strings
     * Description:
     * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
     * @param string $str
     * @return array
     */
    public static function splitString(string $str): array {
        // My Solution
        if(strlen($str) == 0) return [];
        return array_map(function ($i) {
            if(strlen($i) != 2) return $i . '_';
            return $i;
        }, str_split($str, 2));

        // Codewars Solution (khlivnyuk)
        // preg_match_all('/\w{2}/', $str . '_', $matches);
        // return array_values($matches[0]);
    }

    /**
     * Title: Convert string to camel case
     * Description:
     * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
     * @param string $str
     * @return void
     */
    public static function toCamelCase(string $str): string {
        // My Solution
        // return array_reduce(preg_split('/(?=[A-Z_-])/', $str), function ($carry, $item) {
        //     $i = preg_replace('/[-_]+/', '', $item);
        //     if(is_null($carry)) {
        //         if(preg_match('~^\p{Lu}~u', $i)) {
        //             return ucfirst(strtolower($i));
        //         }
        //         return strtolower($i);
        //     }
        //     return $carry . ucfirst(strtolower($i));
        // });

        // Codewars Solution (muxa92)
        return preg_replace_callback("~[_-](\w)~", function($m) { return strtoupper($m[1]); }, $str);
    }

    /**
     * Title: Which are in?
     * Description:
     * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
     * Notes:
     * Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
     * In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
     * Beware: In some languages r must be without duplicates.
     * @param array $array1
     * @param array $array2
     * @return void
     */
    public static function inArray(array $array1, array $array2): array {
        // My Solution
        $r = [];
        foreach($array1 as $ao) {
            for($ctr = 0;$ctr < count($array2);$ctr++) {
                if(!in_array($ao, $r)) {
                    if(substr_count($array2[$ctr], $ao) > 0) {
                        array_push($r, $ao);
                    }
                }
            }
        }
        sort($r);
        return $r;

        // Codewars Solution [mattwellss]
        // sort($array1);
        // return array_values(array_filter($array1, function ($str1) use ($array2) {
        //     return strstr(implode(' ', $array2), $str1);
        // }));
    }
}
