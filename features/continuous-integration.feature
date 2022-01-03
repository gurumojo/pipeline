Feature: continuous integration

	To ensure quality, security, and value
	As a software development stakeholder
	One prefers building changes automatically

	Background:

		Given a healthy integration pipeline
		And a new code submission
		#And finally log details

	Scenario: 

		Given a clean code checkout
		When unit tests pass
		And integration succeeds
		Then the build artifacts are saved
		And the deployment pipeline is triggered

	Scenario: 

		Given a clean code checkout
		When unit tests fail
		And integration fails
		Then the build artifacts are purged
		And the pipeline status is failed

