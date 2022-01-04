Feature: continuous deployment

	To ensure quality, security, and value
	As a software development stakeholder
	One prefers deploying changes automatically

	Background:

		Given a healthy deployment pipeline
		And a newly integrated build
		#And finally log details

	Scenario: 

		When automated acceptance tests pass
		Then a button push triggers deployment
		And the pipeline awaits final approval

	Scenario: 

		When automated acceptance tests fail
		Then manual acceptance tests are skipped
		And the build artifacts are purged
		And the pipeline is abandoned

	Scenario: 

		When automated acceptance tests pass
		And manual acceptance tests pass
		Then a button push triggers release
		And the pipeline ends in production

	Scenario: 

		When manual acceptance tests fail
		Then the build artifacts are purged
		And the pipeline is abandoned

