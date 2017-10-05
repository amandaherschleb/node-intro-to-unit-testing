const should = require('chai').should()

const fizzBuzzer = require('../fizzBuzzer')

// unit tests for our `adder` function
describe('fizzBuzzer', function () {

  // test the normal cases
  it('should return fizz-buzz if number is divisible by 15', function () {
    const normalCases = [15, 30, 105, 150]

    // for each input, 'fizzBuzzer' should return fizz-buzz
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input)
      answer.should.equal('fizz-buzz')
    })
  })

  it('should return buzz if number is divisible by 5', function () {
    const normalCases = [5, 20, 55, 100]

    // for each input, 'fizzBuzzer' should return buzz
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input)
      answer.should.equal('buzz')
    })
  })

  it('should return fizz if number is divisible by 3', function () {
    const normalCases = [3, 12, 33, 42]

    // for each input, 'fizzBuzzer' should return fizz
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input)
      answer.should.equal('fizz')
    })
  })

  it('should return the number if not divisible by 3, 5 or 15', function () {
    const normalCases = [1, 13, 47, 77]

    // for each input, 'fizzBuzzer' should return fizz
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input)
      answer.should.equal(input)
    })
  })

  // test edge cases
  // negative numbers
  it('should return fizz if negative number is  divisible by 3', function () {
    const edgeCases = [-3, -12, -33, -42]

    // for each input, 'fizzBuzzer' should return fizz
    edgeCases.forEach(input => {
      const answer = fizzBuzzer(input)
      answer.should.equal('fizz')
    })
  })

  // zero, 'fizzBuzzer' should return 0
  it('should return 0 if input is 0', function () {
    const answer = 0
    answer.should.equal(0)
  })

  // test bad inputs
  it('should raise error if args not numbers', function () {
    // range of bad inputs
    const badInputs = ['hi', true, NaN, function () {}, [1, 2, 3]]

    // for each input, error should be thown
    badInputs.forEach(function (input) {
      (function () {
        adder(input[0], input[1])
      }).should.throw(Error)
    })
  })
})
