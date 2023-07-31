<?php

namespace Src;

use PHPUnit\Framework\TestCase;

class StringUtilityTest extends TestCase {
    /**
     * @test
     * @testdox It should run in array
     * @return void
     */
    public function inArray(): void {
        $a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
        $a1 = ["arp", "live", "strong"];
        $this->assertSame(["arp", "live", "strong"], StringUtility::inArray($a1, $a2));
        $a1 = ["xyz", "live", "strong"];
        $this->assertSame(["live", "strong"], StringUtility::inArray($a1, $a2));
        $a1 = ["live", "strong", "arp"];
        $this->assertSame(["arp", "live", "strong"], StringUtility::inArray($a1, $a2));
        $a1 = ['tarp', 'mice', 'bull'];
        $this->assertSame([], StringUtility::inArray($a1, $a2));
    }

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
