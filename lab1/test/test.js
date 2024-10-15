var assert = require('assert');
const Mtrx = require('mtrx');

describe('Mtrx', function () {
  describe("Creating matrices", function () {
    var test_set = [1, 2, 4, 8, 16, 100]
    it('should create a 1x1 matrix when calling without arguments', function () {
      const m = new Mtrx();
      assert.equal(m.rows, 1);
      assert.equal(m.cols, 1);
    });
    it('should create a zero matrix 3х2', function () {
      const m = Mtrx.zeros(3, 3);
      assert.ok(Mtrx.equal(m, new Mtrx([
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ])));
    });
    it('must create a NxN matrix when calling from N in the cash of the argument', function () {
      test_set.forEach((i) => {
        const m = new Mtrx(i);
        assert.equal(m.rows, i);
        assert.equal(m.cols, i);        
      });
    });
    it('must create a NxM matrix when calling with N, M in the cash of arguments', function () {
      test_set.forEach((i) => {
        test_set.forEach((j) => {
          const m = new Mtrx(i, j);
          assert.equal(m.rows, i);
          assert.equal(m.cols, j);
        });
      });
    });
    it('Must create a 3x3 matrix filled X when calling with 3, 3, X in the cash of arguments', function () {
      test_set.forEach((x) => {
        const m = new Mtrx(3, 3, x);
        assert.equal(m.rows, 3);
        assert.equal(m.cols, 3);
        assert.ok(Mtrx.equal(m, new Mtrx([x,x,x],[x,x,x],[x,x,x])));
      });
    });
  });
  describe("Receiving and assigning data from the matrix", ()=>{
    const m = new Mtrx([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    it("Must return 1 at the request of Eleemnet 0х0", function () {
      assert.equal(m[0][0], 1);
    });
    it("Should return 5 on request Eleemnet 1х1", function () {
      assert.equal(m[1][1], 5);
    });
    it("Should return 7 on request Eleemnet 2х0", function () {
      assert.equal(m[2][0], 7);
    });
    it("I must replace the Elehement 0х0 на 10", function () {
      m[0][0]=10;
      assert.equal(m[0][0], 10);
    });
    it("I must replace the Elehement 1х1 на 10", function () {
      m[1][1]=10;
      assert.equal(m[1][1], 10);
    });
    it("I must replace the Elehement 2х0 на 10", function () {
      m[2][0]=10;
      assert.equal(m[2][0], 10);
    });
  });
});