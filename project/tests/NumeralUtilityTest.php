<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class NumeralUtilityTest extends TestCase {
    /**
     * @test
     * @testdox It should run mean square
     * @return void
     */
    public function meanSquare(): void {
        $this->assertSame(9, NumeralUtility::meanSquare([1, 2, 3], [4, 5, 6]));
        $this->assertSame(16.5, NumeralUtility::meanSquare([10, 20, 10, 2], [10, 25, 5, -2]));
        $this->assertSame(1, NumeralUtility::meanSquare([-1, 0], [0, -1]));
    }
}