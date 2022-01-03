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

const usage = {
	public: {
		development: 'none',
		integration: 'none',
		production: 'general'
	},
	private: {
		development: 'open',
		integration: 'guided',
		production: 'admin'
	}
}

const status = [
	'cancelled',
	'failure',
	'skipped',
	'success'
]

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
		this.network = ''
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

	setNetwork(string) {
		this.network = string
		try {
			this.usage = usage[string][this.environment]
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

	setUsage(string) {
		this.usage = string
	}
}

setWorldConstructor(CustomWorld)

