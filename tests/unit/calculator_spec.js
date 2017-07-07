var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add a number to initial 0', function(){
    var expected = 4;
    calculator.add(4);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can add a number to a non-zero value', function(){
    var expected = 7;
    calculator.add(3);
    calculator.add(4);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can add a negative number to zero', function(){
    var expected = -2;
    calculator.add(-2);
    assert.equal(expected, calculator.runningTotal);
  })



});
