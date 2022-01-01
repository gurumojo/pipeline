Feature: continuous integration

	To ensure quality, security, and value
	As a software development stakeholder
	I want to build every change automatically

	Background:

		Given a healthy CI pipeline
		And a new code submission
		And a new code checkout
		#And finally log details

	Scenario: 

		Given a code commit hash
		When unit tests pass
		And integration succeeds
		Then the build is saved with the commit hash
		And the deployment pipeline is triggered

	Scenario: 

		Given a code commit hash
		When unit tests fail
		And integration fails
		Then the build artifacts are purged
		And the build status is failed


	# Scenario Outline:

	# 	Given a variable set to <var>
	# 	When I increment the variable by <increment>
	# 	Then the variable should contain <result>

	# 	Examples:
	# 		| var | increment | result |
	# 		| 100 |         5 |    105 |
	# 		|  12 |         5 |     17 |
	# 		|  99 |      1238 |   1337 |

