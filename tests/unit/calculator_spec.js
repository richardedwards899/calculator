var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  //tests for the add function

  it('can add a number to initial 0', function(){
    var expected = 4;
    calculator.add(4);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can add a negative number to zero', function(){
    var expected = -2;
    calculator.add(-2);
    assert.equal(expected, calculator.runningTotal);
  })

  //tests for the subtract function

  it('can subtract a number from initial 0', function(){
    var expected = -4;
    calculator.subtract(4);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can subtract a negative number from initial 0', function(){
    var expected = 4;
    calculator.subtract(-4);
    assert.equal(expected, calculator.runningTotal);
  })

  //tests for the product function
  it('can multiply a number by initial 0', function(){
    var expected = 0;
    calculator.multiply(2);
    assert.equal(expected, calculator.runningTotal);
  })

  // tests for the divide function
  it('can divide 0 by a number', function(){
    var expected = 0;
    calculator.divide(2);
    assert.equal(expected, calculator.runningTotal);
  })

  // integration tests ***************************************************
  it('can add 1 and 4 to get 5', function(){
    var expected = 5;
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);
  })

  it('can subtract 4 from 7 to get 3', function(){
    var expected = 3;
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);
  })

  it('can multiply 3 by 5 to get 15', function(){
    var expected = 15;
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);
  })

  it('can divide 21 by 7 to get 3', function(){
    var expected = 3;
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);
  })

  //tests for concatenating multiple button clicks

  it('can accept and display one digit', function(){
    var expected = 3;
    calculator.numberClick(3);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can accept and display two digits', function(){
    var expected = 34;
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can accept and display one digit', function(){
    var expected = 3;
    calculator.numberClick(3);
    assert.equal(expected, calculator.runningTotal);
  })

  it('can accept and display multiple digits', function(){
    var expected = 12345;
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.equal(expected, calculator.runningTotal);
  })

  //tests for chaining together multiple operations

  it('can get 10 by clicking "3 + 2 + 5"', function(){
    var expected = 10;
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);
  })

  it('can get 15 by clicking "4 * 3 / 2"', function(){
    var expected = 6;
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);
  })

  it('can clear the running total', function(){
    var expected = 6;
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(expected, calculator.runningTotal);

    expected = 0;
    calculator.clearClick();
    assert.equal(expected, calculator.runningTotal);
    assert.equal(6, calculator.previousTotal);
  })

});
