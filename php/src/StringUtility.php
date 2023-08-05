<?php

namespace Src;

class StringUtility {
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
     * Title: Make the Deadfish Swim
     * Description:
     * Write a simple parser that will parse and run Deadfish.
     * Deadfish has 4 commands, each 1 character long:
     * i increments the value (initially 0)
     * d decrements the value
     * s squares the value
     * o outputs the value into the return array
     * @param string $data
     * @return array
     */
    public static function deadfishSwim(string $data): array {
        // My Solution
        $i = 0;
        $r = [];
        foreach(str_split($data) as $item) {
            switch($item) {
                case 'i':
                    $i += 1;
                    break;
                case 'd':
                    $i -= 1;
                    break;
                case 's':
                    $i = pow($i, 2);
                    break;
                case 'o':
                    array_push($r, $i);
            }
        }
        return $r;
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
