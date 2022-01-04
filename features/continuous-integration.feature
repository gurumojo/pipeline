Feature: continuous integration

	To ensure quality, security, and value
	As a software development stakeholder
	One prefers building changes automatically

	Background:

		Given a healthy integration pipeline
		And a new code submission
		#And finally log details

	Scenario: 

		When unit tests pass
		And the build artifacts are saved
		Then integration is a success
		And the job status is success

	Scenario: 

		When unit tests pass
		And the build artifacts are purged
		Then integration is a failure
		And the job status is failure

	Scenario: 

		When unit tests fail
		And the build artifacts are purged
		Then integration is a failure
		And the job status is failure

