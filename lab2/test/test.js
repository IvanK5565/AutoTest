var assert = require('assert');
const { equal, add }  = require('../MyMatrix.js');

describe('MyMatrix', function () {
  describe("compare", function () {
    m1 = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    m2 = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    it('must be equal', function(){
      assert.ok(equal(m1,m2))
    })
    m3 = [
      [1,0,0],
      [0,0,0],
      [0,0,0]
    ]
    it('must not be equal', function(){
      assert.ok(false == equal(m1,m3))
    })
  })
  describe("adding", function(){
    m1 = [
      [1,0,0],
      [0,0,0],
      [0,0,0]
    ]
    m2 = [
      [1,0,0],
      [0,0,0],
      [0,0,0]
    ]
    m3 = [
      [2,0,0],
      [0,0,0],
      [0,0,0]
    ]
    it("must be \n2,0,0\n0,0,0\n0,0,0", function(){
      assert.ok(equal(add(m1,m2),m3))
    })
    m4 = [
      [1,0,0],
      [0,0,0],
      [0,0,1]
    ]
    m5 = [
      [3,0,0],
      [0,0,0],
      [0,0,1]
    ]
    it("must be \n3,0,0\n0,0,0\n0,0,1", function(){
      assert.ok(equal(add(m3,m4),m5))
    })
  })
});