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

Given('any application in {}', function (environment) {
	this.setEnvironment(environment)
})

Given('a newly integrated build', function () {
	let hash = createHash('sha256')
	hash.update(String(Date.now()))
	this.setBuild(hash.copy().digest('hex').slice(0, 12))
})

Given('varying environment deployments', function () {
	// dev, int, prd
})

Given('varying rules in each environment', function () {
	// setting boundaries
})

Then('a button push triggers deployment', function () {
	this.setDeploy(true)
})

Then('the pipeline awaits final approval', function () {
	// manual process gate
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

When('the build artifacts are {}', function (action) {
	switch (action) {
		case 'saved':
			this.setBuild(this.commit)
			break
		case 'purged':
		default:
			this.setBuild(null)
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
			this.setStatus('faillure')
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
			this.setStatus('failure')
	}
})

When('one uses apps from a {}', function (network) {
	this.setNetwork(network)
})



Then('the deployment pipeline is triggered', function () {
	assert.ok(this.deploy)
})

Then('integration is a {}', function (state) {
	switch (state) {
		case 'success':
			assert.ok(this.build === this.commit)
			this.setStatus('success')
			break
		case 'failure':
		default:
			assert.ok(!this.build)
			this.setStatus('failure')
	}
})

Then('the job status is {}', function (string) {
	assert.ok(this.status === string)
})

Then('the pipeline status is {}', function (string) {
	assert.ok(this.status === string)
})

Then('the pipeline grants {} permission', function (string) {
	assert.ok(this.access === string || this.usage === string)
})

Then('a button push triggers release', function () {
	assert.ok(this.accepted && this.approved)
	this.setStatus('success')
})

Then('the pipeline ends in production', function () {
	assert.equal(this.status, 'success')
})

Then('the pipeline is abandoned', function () {
	assert.equal(this.status, 'failure')
})

Then('finally log details', function() {
	this.infodump()
})

