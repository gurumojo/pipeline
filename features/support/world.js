const { setWorldConstructor, World } = require('@cucumber/cucumber')

class CustomWorld extends World {

  constructor(options) {
	super(options)
    this.build = ''
	this.clone = 'git clone git@github.com:gurumojo/pipeline.git'
    this.commit = ''
    this.deploy = false
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

