const { createHash } = require('crypto')

const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert').strict


Given('a healthy {} pipeline', function (type) {
	this.setStatus('healthy')
})

Given('a new code submission', function () {
	let hash = createHash('sha256')
	hash.update(String(Date.now()))
	this.setCommit(hash.copy().digest('hex').slice(0, 12))
})

Given('a clean code checkout', function () {
	// $ git checkout ${this.commit}
})

Given('any application in {}', function (environment) {
	this.setEnvironment(environment)
})

Given('a newly integrated build', function () {
	let hash = createHash('sha256')
	hash.update(String(Date.now()))
	this.setBuild(hash.copy().digest('hex').slice(0, 12))
})

Given('a clean deployment', function () {
	// $ deploy ${this.build}
})

Given('varying environment deployments', function () {
	// dev, int, prd
})

Given('varying rules in each environment', function () {
	// setting boundaries
})



When('integration {}', function (state) {
	switch (state) {
		case 'succeeds':
			this.setBuild(this.commit)
			this.setStatus('success')
			break
		case 'fails':
		default:
			this.setBuild(null)
			this.setStatus('failed')
	}
})

When('unit tests {}', function (status) {
	switch (status) {
		case 'pass':
			this.setDeploy(true)
			break
		case 'fail':
		default:
			this.setDeploy(false)
	}
})

When('one has active {} credentials', function (role) {
	this.setRole(role)
})

When('automated acceptance tests {}', function (status) {
	switch (status) {
		case 'pass':
			this.setAccepted(true)
			break
		case 'fail':
		default:
			this.setAccepted(false)
			this.setStatus('failed')
	}
})

When('manual acceptance tests {}', function (status) {
	switch (status) {
		case 'pass':
			this.setApproved(true)
			break
		case 'fail':
		default:
			this.setApproved(false)
			this.setStatus('failed')
	}
})

When('one uses apps from a {}', function (network) {
	this.setNetwork(network)
})



Then('the build artifacts are {}', function (action) {
	switch (action) {
		case 'saved':
			assert.ok(this.build === this.commit)
			break
		case 'purged':
		default:
			assert.ok(!this.build)
	}
})

Then('the deployment pipeline is triggered', function () {
	assert.ok(this.deploy)
})

Then('the pipeline status is {}', function (string) {
	assert.ok(this.status === string)
})

Then('the pipeline grants {} permission', function (string) {
	assert.ok(this.access === string || this.usage === string)
})

Then('a button push triggers release', function () {
	assert.ok(this.accepted && this.approved)
	this.setStatus('complete')
})

Then('the pipeline ends in production', function () {
	assert.equal(this.status, 'complete')
})

Then('the pipeline is abandoned', function () {
	assert.equal(this.status, 'failed')
})

Then('finally log details', function() {
	this.infodump()
})

