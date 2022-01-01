const { setWorldConstructor, World } = require('@cucumber/cucumber')

const access = {
	admin: {
		development: 'write',
		integration: 'read',
		production: 'read'
	},
	user: {
		development: 'read',
		integration: 'zero',
		production: 'zero'
	}
}

class CustomWorld extends World {

	constructor(options) {
		super(options)
		this.build = ''
		this.clone = 'git clone git@github.com:gurumojo/pipeline.git'
		this.commit = ''
		this.deploy = false
		this.environment = 'development'
		this.role = ''
		this.source = null
		this.status = 'pending'
		this.variable = 0
	}

	infodump() {
		console.log(JSON.stringify(this, null, 2))
	}

	setBuild(string) {
		this.build = string
	}

	setCommit(string) {
		this.commit = string
	}

	setDeploy(bool) {
		this.deploy = bool
	}

	setEnvironment(string) {
		this.environment = string
	}

	setRole(string) {
		this.role = string
		this.access = access[string][this.environment]
	}

	setStatus(string) {
		this.status = string
	}

	setTo(number) {
		this.variable = number
	}

	incrementBy(number) {
		this.variable += number
	}
}

setWorldConstructor(CustomWorld)

