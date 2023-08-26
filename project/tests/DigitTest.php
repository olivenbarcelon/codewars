<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class DigitTest extends TestCase {
    /**
     * @test
     * @testdox It should run square digit
     * @return void
     */
    public function squareDigit(): void {
        $this->assertSame(811181, Digit::squareDigit(9119));
        $this->assertSame(41636640, Digit::squareDigit(24680));
        $this->assertSame(19254981, Digit::squareDigit(13579));
        $this->assertSame(0, Digit::squareDigit(0));
    }
}
