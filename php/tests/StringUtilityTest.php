<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class StringUtilityTest extends TestCase {
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
