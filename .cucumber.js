const world = {
  appUrl: process.env.APP_URL || 'http://localhost:8080/'
}

const common = [
	`--world-parameters '${JSON.stringify(world)}'`,
]

module.exports = {
  'default': `${common.join(' ')} --format html:./cucumber.html --publish-quiet`,
  'progress': `${common.join(' ')} --format progress-bar --format html:./cucumber.html`,
  'share': `${common.join(' ')} --format html:./cucumber.html --publish`,
}

