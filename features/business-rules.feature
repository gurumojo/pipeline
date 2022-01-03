Feature: business rules

	To ensure quality, security, and value
	As a software development stakeholder
	One prefers testing rules automatically

	Background:

		Given a healthy deployment pipeline
		And varying environment deployments
		And varying rules in each environment

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

	Scenario Outline:

		Given any application in <environment>
		When one uses apps from a <network>
		Then the pipeline grants <usage> permission

		Examples:
			| environment | network | usage   |
			| development | public  | none    |
			| development | private | open    |
			| integration | public  | none    |
			| integration | private | guided  | 
			| production  | public  | general |
			| production  | private | admin   |
