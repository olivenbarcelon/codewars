<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class NumeralUtilityTest extends TestCase {
    /**
     * @test
     * @testdox It should run to roman
     * @return void
     */
    public function toRoman(): void {
        $this->assertSame('MCMXC', NumeralUtility::toRoman(1990));
        $this->assertSame('MMVIII', NumeralUtility::toRoman(2008));
        $this->assertSame('MDCLXVI', NumeralUtility::toRoman(1666));
        $this->assertSame("M", NumeralUtility::toRoman(1000));
        $this->assertSame("IV", NumeralUtility::toRoman(4));
        $this->assertSame("I", NumeralUtility::toRoman(1));
    }
}