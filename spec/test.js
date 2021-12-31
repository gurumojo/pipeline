const { ok } = require('assert')
const { readdir } = require('fs/promises')
const { resolve } = require('path')

describe('pipeline', () => {

	it('contains executable feature descriptions', async () => {
		const path = resolve(__dirname, '../feature')
		const files = await readdir(path)
		for (const file of files) {
			console.log(file)
		}
		ok(!!files.length)
	})
})

