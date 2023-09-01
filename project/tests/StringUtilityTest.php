<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class StringUtilityTest extends TestCase {
    /**
     * @test
     * @testdox It should run duplicate count
     * @return void
     */
    public function duplicateCount(): void {
        $this->assertSame(0, StringUtility::duplicateCount('abcde'));
        $this->assertSame(2, StringUtility::duplicateCount('aabbcde'));
        $this->assertSame(2, StringUtility::duplicateCount('aabBcde'));
        $this->assertSame(1, StringUtility::duplicateCount('indivisibility'));
        $this->assertSame(2, StringUtility::duplicateCount('Indivisibilities'));
        $this->assertSame(2, StringUtility::duplicateCount('aA11'));
        $this->assertSame(2, StringUtility::duplicateCount('ABBA'));
    }

    /**
     * @test
     * @testdox It should run alphabet position
     * @return void
     */
    public function alphabetPosition(): void {
        $this->assertSame('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11', StringUtility::alphabetPosition('The sunset sets at twelve o\' clock.'));
    }

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
}
