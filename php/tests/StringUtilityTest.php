<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class StringUtilityTest extends TestCase {
    /**
     * @test
     * @testdox It should run deadfish swim
     * @return void
     */
    public function deadfishSwim(): void {
        $this->assertSame([8, 64], StringUtility::deadfishSwim('iiisdoso'));
        $this->assertSame([8, 64], StringUtility::deadfishSwim("iiisxxxdoso"));
    }

    /**
     * @test
     * @testdox It should run split string
     * @return void
     */
    public function splitString(): void {
        $this->assertSame(['ab', 'c_'], StringUtility::splitString('abc'));
        $this->assertSame(['ab', 'cd', 'ef'], StringUtility::splitString('abcdef'));
        $this->assertSame(["ab", "cd", "ef", "g_"], StringUtility::splitString("abcdefg"));
        $this->assertSame([], StringUtility::splitString(""));
    }

    /**
     * @test
     * @testdox It should run to camel case
     * @return void
     */
    public function toCamelCase(): void {
        $this->assertSame('theStealthWarrior', StringUtility::toCamelCase('the-stealth-warrior'));
        $this->assertSame('TheStealthWarrior', StringUtility::toCamelCase('The_Stealth_Warrior'));
        $this->assertSame('TheStealthWarrior', StringUtility::toCamelCase('The_Stealth-Warrior'));
    }

    /**
     * @test
     * @testdox It should run in array
     * @return void
     */
    public function inArray(): void {
        $a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        $a1 = ["arp", "live", "strong"];
        $this->assertSame(["arp", "live", "strong"], StringUtility::inArray($a1, $a2));
        $a1 = ["xyz", "live", "strong"];
        $this->assertSame(["live", "strong"], StringUtility::inArray($a1, $a2));
        $a1 = ["live", "strong", "arp"];
        $this->assertSame(["arp", "live", "strong"], StringUtility::inArray($a1, $a2));
        $a1 = ['tarp', 'mice', 'bull'];
        $this->assertSame([], StringUtility::inArray($a1, $a2));
    }

    /**
     * @test
     * @testdox It should run get middle
     * @return void
     */
    public function getMiddle(): void {
        $this->assertSame('es', StringUtility::getMiddle('test'));
        $this->assertSame('t', StringUtility::getMiddle('testing'));
        $this->assertSame('dd', StringUtility::getMiddle('middle'));
        $this->assertSame('A', StringUtility::getMiddle('A'));
    }
}
