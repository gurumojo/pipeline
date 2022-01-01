Feature: continuous integration

	To ensure quality, security, and value
	As a software development stakeholder
	I want to build every change automatically

	Background:

		Given an integration pipeline
		And a new code submission
		And a new code checkout
		#And finally log details

	Scenario: 

		Given an integration pipeline trigger
		When unit tests pass
		And integration succeeds
		Then the build is saved with the commit hash
		And the deployment pipeline is triggered

	Scenario: 

		Given an integration pipeline trigger
		When unit tests fail
		And integration fails
		Then the build artifacts are purged
		And the pipeline status is failed


	Scenario Outline:

		Given any application in <environment>
		When I have active <role> credentials
		Then the pipeline grants <access> permission

		Examples:
			| environment | role  | access |
			| development | admin | write  |
			| development | user  | read   |
			| integration | admin | read   |
			| integration | user  | zero   |
			| production  | admin | read   |
			| production  | user  | zero   |

