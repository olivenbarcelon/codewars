<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class XOTest extends TestCase {
    /**
     * @test
     * @testdox It should proceed exes and ohs
     * @return void
     */
    public function exesAndOhs(): void {
        $this->assertSame(true, XO::exesAndOhs('ooxx'));
        $this->assertSame(false, XO::exesAndOhs('xooxx'));
        $this->assertSame(true, XO::exesAndOhs('ooxXm'));
        $this->assertSame(true, XO::exesAndOhs('zpzpzpp'));
        $this->assertSame(false, XO::exesAndOhs('zzoo'));
    }
}
