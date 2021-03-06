const { readdirSync, statSync } = require('fs')
const { resolve } = require('path')

function isOdd(num) { return num % 2 }


describe('pipeline/cli', () => {

	const originalConsole = console

	beforeAll(() => {
		console.log = () => {}
	})

	afterAll(() => {
		console.log = originalConsole.log
	})

	jest.mock('argparse', () => {
		class ArgumentParser {
			constructor(options) {
				Object.assign(this, {
					add_argument: () => {},
					parse_args: (x) => {
						return x ? { features: true } : {}
					},
					print_help: () => 'argparse'
				})
			}
		}
		return { ArgumentParser }
	})

	const subjectUnderTest = require('../cli')

	it('executes workflows from the command line', () => {
		// octal masking translates to r = 4, w = 2, x = 1
		// so we find an odd last bit in a shared executable
		const stat = statSync(resolve(__dirname, '../index.js'))
		const mode = stat.mode.toString(8).slice(-1)
		expect(isOdd(mode)).toBeTruthy()
	})

	it('presents usage information by default', () => {
		expect(subjectUnderTest()).toEqual('argparse')
	})

	it('presents feature information on demand', () => {
		expect(Array.isArray(subjectUnderTest('-f').features)).toBe(true)
	})

	/*
	it('', () => {
		// ...
	})
	*/
})

