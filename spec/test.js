const { ok } = require('assert')
const { readdirSync } = require('fs')
const { resolve } = require('path')

describe('pipeline', () => {

	it('contains executable feature descriptions', () => {
		const files = readdirSync(resolve(__dirname, '../feature'))
		ok(!!files.length)
	})
})

