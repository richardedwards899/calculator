var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });


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

  it('can add a negative number to a negative number', function(){
    var expected = -5;
    calculator.add(-2);
    calculator.add(-3);

    assert.equal(expected, calculator.runningTotal);
  })

  it('can subtract a number from initial 0', function(){
    var expected = -4;
    calculator.subtract(4);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can subtract a number from a non-zero value', function(){
    var expected = -7;
    calculator.subtract(3);
    calculator.subtract(4);
    assert.equal(expected, calculator.runningTotal);
  })



});
