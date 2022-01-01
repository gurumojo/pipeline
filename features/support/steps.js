const { createHash } = require('crypto')

const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert').strict

Then('finally log details', function() {
	this.infodump()
})


Given('an integration pipeline', function () {
	this.setStatus('healthy')
})

Given('a new code submission', function () {
	let hash = createHash('sha256')
	hash.update(String(Date.now()))
	this.setCommit(hash.copy().digest('hex').slice(0, 12))
})

Given('a new code checkout', function () {
	//	$ git checkout ${this.commit}
})

Given('an integration pipeline trigger', function () {
	assert.equal(this.commit.length, 12)
})

Given('any application in {}', function (environment) {
	this.setEnvironment(environment)
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

When('I have active {} credentials', function (role) {
	this.setRole(role)
})


Then('the build is saved with the commit hash', function () {
	assert.ok(this.build === this.commit)
})

Then('the deployment pipeline is triggered', function () {
	assert.ok(this.deploy)
})

Then('the pipeline status is {}', function (string) {
	assert.ok(this.status === string)
})

Then('the build artifacts are purged', function () {
	assert.ok(!this.build)
})

Then('the pipeline grants {} permission', function (string) {
	assert.ok(this.access === string)
})


//Given('a variable set to {int}', function (number) {
//	this.setTo(number)
//})
//
//When('I increment the variable by {int}', function (number) {
//	this.incrementBy(number)
//})
//
//Then('the variable should contain {int}', function (number) {
//	assert.equal(this.variable, number)
//})

