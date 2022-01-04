const { equal, ok } = require('assert')
const { readdirSync, statSync } = require('fs')
const { resolve } = require('path')

function isOdd(num) { return num % 2 }


describe('pipeline', () => {
	
	it('contains executable feature descriptions', () => {
		const gherkin = /feature$/
		const files = readdirSync(resolve(__dirname, '../features')).reduce((x, i) => {
			if (gherkin.test(i)) x.push(i)
			return x
		}, [])
		ok(!!files.length)
	})


	describe('cli', () => {
	
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
			ok(isOdd(mode))
		})
	
		it('presents usage information by default', () => {
			equal(subjectUnderTest(), 'argparse')
		})
	
		it('presents feature information on demand', () => {
			ok(Array.isArray(subjectUnderTest('-f').features))
		})
	
	
	})
	/*
	it('', () => {
		
	})
	*/
})

