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
}
