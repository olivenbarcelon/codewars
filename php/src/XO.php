<?php

namespace Src;

class XO {
    /**
     * Exes and Ohs
     * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
     * @param string $data
     * @return boolean
     */
    public static function exesAndOhs(string $data): bool {
        // My Solution
        $array = array_count_values(str_split(strtolower($data)));
        foreach($array as $key => $value) {
            if($key == 'x') {
                $x = $value;
            }
            else if($key == 'o') {
                $o = $value;
            }
        }
        return ($x ?? 0) == ($o ?? 0);

        // Codewars Solution
        // $s = strtolower($data);
        // return substr_count($s, 'x') == substr_count($s, 'o');
    }
}
