const { ok } = require('assert')
const { readdirSync } = require('fs')
const { resolve } = require('path')


describe('pipeline', () => {
	
	it('contains executable behavior specifications', () => {
		const spec = /test.js$/
		const files = readdirSync(resolve(__dirname)).reduce((x, i) => {
			if (spec.test(i)) x.push(i)
			return x
		}, [])
		ok(!!files.length)
	})
	
	it('contains executable feature descriptions', () => {
		const gherkin = /feature$/
		const files = readdirSync(resolve(__dirname, '../features')).reduce((x, i) => {
			if (gherkin.test(i)) x.push(i)
			return x
		}, [])
		ok(!!files.length)
	})

	/*
	it('', () => {
		// ...
	})
	*/
})

