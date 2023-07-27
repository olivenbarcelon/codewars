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

    /**
     * @test
     * @testdox It should run dig pow
     * @return void
     */
    public function digPow(): void {
        $this->assertSame(1, Digit::digPow(89, 1));
        $this->assertSame(-1, Digit::digPow(92, 1));
        $this->assertSame(2, Digit::digPow(695, 2));
        $this->assertSame(51, Digit::digPow(46288, 3));
    }
}
