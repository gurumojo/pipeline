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
		this.accepted = null
		this.approved = null
		this.build = ''
		this.clone = 'git clone git@github.com:gurumojo/pipeline.git'
		this.commit = ''
		this.deploy = false
		this.environment = ''
		this.role = ''
		this.source = null
		this.status = 'pending'
		this.variable = 0
	}

	infodump() {
		console.log(JSON.stringify(this, null, 2))
	}

	setAccepted(bool) {
		this.accepted = bool
	}

	setApproved(bool) {
		this.approved = bool
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
		try {
			this.access = access[this.role][string]
		} catch (error) {}
	}

	setRole(string) {
		this.role = string
		try {
			this.access = access[string][this.environment]
		} catch (error) {}
	}

	setStatus(string) {
		this.status = string
	}
}

setWorldConstructor(CustomWorld)

