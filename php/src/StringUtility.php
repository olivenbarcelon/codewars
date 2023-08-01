<?php

namespace Src;

class StringUtility {
    /**
     * Title: Convert string to camel case
     * Description:
     * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
     * @param string $str
     * @return void
     */
    public static function toCamelCase(string $str) {
        // My Solution
        return array_reduce(preg_split('/(?=[A-Z_-])/', $str), function ($carry, $item) {
            $i = preg_replace('/[-_]+/', '', $item);
            if(is_null($carry)) {
                if(preg_match('~^\p{Lu}~u', $i)) {
                    return ucfirst(strtolower($i));
                }
                return strtolower($i);
            }
            return $carry . ucfirst(strtolower($i));
        });

        // Codewars Solution (muxa92)
        // return preg_replace_callback("~[_-](\w)~", function($m) { return strtoupper($m[1]); }, $str);
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
    public static function inArray(array $array1, array $array2) {
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

    /**
     * Title: Get the Middle Character
     * Description:
     * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
     * @param string $data
     * @return string
     */
    public static function getMiddle(string $data): string {
        // My Solution
        $array = str_split($data);
        $count = count($array);
        $mid = intdiv($count, 2);

        if($count % 2) {
            $res = $array[$mid];
        }
        else {
            $res = $array[$mid - 1] . $array[$mid];
        }
        return $res;

        // My 2nd Solution
        // return substr($data, intdiv((strlen($data) - 1), 2), 2 - strlen($data) % 2);
    }
}
