#!/usr/bin/env node

const { readdirSync } = require('fs')
const { resolve } = require('path')

const { ArgumentParser } = require('argparse')
const { name, version } = require('./package.json')

const defaultArgs = [ 'features' ]

const features = readdirSync(resolve(__dirname, './feature'))

const pipeline = new ArgumentParser({
	add_help: true,
	description: `gurumojo/${name} ${version}`
})

pipeline.add_argument('-v', '--version', { action: 'version', version })
pipeline.add_argument('-f', '--features', {
	action: 'store_true',
	help: `show a list of ${name} features`
})

const args = pipeline.parse_args()

if (args.features) {
	console.dir({ name, version, features })
} else {
	if (JSON.stringify(Object.keys(args)) == JSON.stringify(defaultArgs)) {
		pipeline.print_help()
	}
}

