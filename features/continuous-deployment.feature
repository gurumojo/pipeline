Feature: continuous deployment

	To ensure quality, security, and value
	As a software development stakeholder
	One prefers deploying changes automatically

	Background:

		Given a healthy deployment pipeline
		And a newly integrated build
		#And finally log details

	Scenario: 

		Given a clean deployment
		When automated acceptance tests pass
		And manual acceptance tests pass
		Then a button push triggers release
		And the pipeline ends in production

	Scenario: 

		Given a clean deployment
		When automated acceptance tests pass
		And manual acceptance tests fail
		Then the pipeline is abandoned

	Scenario: 

		Given a clean deployment
		When automated acceptance tests fail
		Then manual acceptance tests are skipped
		And the pipeline is abandoned


	Scenario Outline:

		Given any application in <environment>
		When one has active <role> credentials
		Then the pipeline grants <access> permission

		Examples:
			| environment | role  | access |
			| development | admin | write  |
			| development | user  | read   |
			| integration | admin | read   |
			| integration | user  | zero   |
			| production  | admin | read   |
			| production  | user  | zero   |

