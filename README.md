pipeline
========

Continuous Integration and Delivery Resources

[![CI-CD](https://github.com/gurumojo/pipeline/actions/workflows/main.yml/badge.svg)](https://github.com/gurumojo/pipeline/actions/workflows/main.yml) [![AWS-SDK](https://github.com/gurumojo/pipeline/actions/workflows/aws.yml/badge.svg)](https://github.com/gurumojo/pipeline/actions/workflows/aws.yml)


value stream
------------
```
developer || repository || integration || testing* || acceptance || release
    |            |             |             |              |          |
    |    push    |             |             |              |          |
    |----------->|   trigger   |             |              |          |
    |            |------------>|   trigger   |              |          |
    |            |             |------------>|              |          |
    |<-----------|<------------|             |              |          |
    |        feedback          |             |              |          |
    |            |             |             |              |          |
    |            |             |             |              |          |
    |            |             |             |              |          |
    |<-----------|<------------|<------------|              |          |
    |            |         feedback          |              |          |
    |            |             |             |   approval   |          |
    |            |             |             |------------->|          |
    |<-----------|<------------|<------------|<-------------|          |
    |            |             |         feedback           |          |
    |            |             |             |              | approval |
    |            |             |             |              |--------->|
    |<-----------|<------------|<------------|<-------------|<---------|
    |            |             |             |          feedback       |
    |            |             |             |              |          |

    * automated scenarios, capacity verification, etc.; run in parallel
```

