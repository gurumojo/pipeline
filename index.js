#!/usr/bin/env node

const runner = require('./cli')

if (require.main === module) {
	runner() // shell executable
}

module.exports = runner

