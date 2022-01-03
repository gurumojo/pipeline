pipeline
========

Continuous integration and delivery resources


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

