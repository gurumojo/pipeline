const { createHash } = require('crypto')

const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('assert').strict

Then('finally log details', function() {
	this.infodump()
})


Given('a healthy CI pipeline', function () {
	this.setStatus('healthy')
})


Given('a new code checkout', function () {
	console.log(`
		$ git checkout ${this.commit}
	`)
})

Given('a new code submission', function () {
	let hash = createHash('sha256')
	hash.update(String(Date.now()))
	this.setCommit(hash.copy().digest('hex').slice(0, 12))
})

Given('a code commit hash', function () {
	assert.equal(this.commit.length, 12)
})


When('integration succeeds', function () {
	this.setBuild(this.commit)
	this.setStatus('success')
})

When('integration fails', function () {
	this.setBuild(null)
	this.setStatus('failed')
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


Then('the build is saved with the commit hash', function () {
	assert.ok(this.build === this.commit)
})

Then('the deployment pipeline is triggered', function () {
	assert.ok(this.deploy)
})

Then('the build status is {}', function (string) {
	assert.ok(this.status === string)
})

Then('the build artifacts are purged', function () {
	assert.ok(!this.build)
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

