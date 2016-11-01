Feature: FizzBuzz
    Scenario: Fizz
        Given the value 3
        When passed to fizzbuzz method
        Then should return Fizz

    Scenario: Buzz
        Given the value 5
        When passed to fizzbuzz method
        Then should return Buzz

    Scenario: Number
        Given the value 4
        When passed to fizzbuzz method
        Then should return 4

    Scenario: FizzBuzz
        Given the value 15
        When passed to fizzbuzz method
        Then should return FizzBuzz

#Feature: FizzBuzz
    #Scenario Outline: Fizz Buzz table test
        #Given the value <number>
        #When passed to fizzbuzz method
        #Then should return <result>

        #Examples:
            #|number|result  |
            #|3     |Fizz    |
            #|4     |4       |
            #|5     |Buzz    |
            #|15    |FizzBuzz|
