<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class StringUtilityTest extends TestCase {
    /**
     * @test
     * @testdox It should run split alternate
     * @return void
     */
    public function splitAlternate(): void {
        $this->assertSame('135024', StringUtility::splitAlternate('012345', 1));
        $this->assertSame('304152', StringUtility::splitAlternate('012345', 2));
        $this->assertSame('012345', StringUtility::splitAlternate('012345', 3));
        $this->assertSame('13024', StringUtility::splitAlternate('01234', 1));
        $this->assertSame('32104', StringUtility::splitAlternate('01234', 2));
        $this->assertSame('20314', StringUtility::splitAlternate('01234', 3));
    }

    /**
     * @test
     * @testdox It should run meeting
     * @return void
     */
    public function meeting(): void {
        $this->assertSame('(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)', StringUtility::meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'));
    }

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
