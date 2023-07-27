<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class SquareEveryDigitTest extends TestCase {
    /**
     * @test
     * @testdox It should proceed square every digit
     * @return void
     */
    public function squareEveryDigit(): void {
        $this->assertSame(811181, SquareEveryDigit::squareDigits(9119));
        $this->assertSame(41636640, SquareEveryDigit::squareDigits(24680));
        $this->assertSame(19254981, SquareEveryDigit::squareDigits(13579));
        $this->assertSame(0, SquareEveryDigit::squareDigits(0));
    }
}
