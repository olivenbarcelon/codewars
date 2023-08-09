[![GuardRails badge](https://api.guardrails.io/v2/badges/204556?token=8db0a2bb8ab9306a3a865d3f776bc4f79dc387880abd627119a6ca3748bf3140)](https://dashboard.guardrails.io/gh/olivenbarcelon/repos/204556)
[![codecov](https://codecov.io/gh/olivenbarcelon/codewars/branch/master/graph/badge.svg?token=6YPFDMG4KW)](https://codecov.io/gh/olivenbarcelon/codewars)
# [codewars](https://www.codewars.com) ([github](https://github.com/olivenbarcelon/codewars))
Code Practice with Codewars

**Setup**
<!-- * composer init -->
* composer install

**Run Project**
* vendor/bin/phpunit tests --testdox

**Generate Report**
* phpdbg -d memory_limit=-1 -qrr ./vendor/bin/phpunit --coverage-html report/ --testdox 

**Dependencies**
* composer require phpunit/phpunit:^9.5.10 --dev
