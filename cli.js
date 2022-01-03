const { readdirSync } = require('fs')
const { resolve } = require('path')

const { ArgumentParser } = require('argparse')
const { name, version } = require('./package.json')

const gherkin = /\.feature$/

const pipeline = new ArgumentParser({
	add_help: true,
	description: `gurumojo/${name} ${version}`
})
pipeline.add_argument('-v', '--version', {
	action: 'version',
	version
})
pipeline.add_argument('-f', '--features', {
	action: 'store_true',
	help: `show a list of ${name} features`
})
//pipeline.add_argument('-e', '--explain', {
//	help: `explain a ${name} feature`
//})
//pipeline.add_argument('-t', '--trigger', {
//	help: `trigger a ${name} feature`
//})

module.exports = function runner() {
	const input = [ ...arguments ]
	const args = input.length ? pipeline.parse_args(input) : pipeline.parse_args()
	let output
	if (args.features) {
		const features = readdirSync(resolve(__dirname, './features')).reduce((x, i) => {
			if (gherkin.test(i)) x.push(i.replace(gherkin, ''))
			return x
		}, [])
		output = { description: pipeline.description, features, args }
	} else if (args.explain) {
	} else if (args.trigger) {
	} else {
		return pipeline.print_help()
		//pipeline.print_usage()
	}
	console.log(output)
	return output
}

