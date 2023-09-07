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
}
