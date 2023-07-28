<?php

namespace Src;

class StringUtility {
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
