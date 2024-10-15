var assert = require('assert');
var sinon = require("sinon")
const { describe, expect } = require('mocha');
const my_lib = require('../gauss_js/gauss_functions');
const matrix = require('../gauss_js/matrix');
fs = require('fs');

describe("Lab 3", function(){

    describe("Test input", function () {
        input_file = "3\n3 6 9 15\n8 8 40 48\n7 35 49 56\n"
        golden_file = '1 2 3'
        var fs_stub;
        beforeEach(() => {
            fs_stub = sinon.stub(fs, "readFileSync");
        });
        
        afterEach(() => {
            fs_stub.restore();
        });
        
        //read_input
        it("test read_input", () => {
            fs_stub.withArgs('input.txt', 'utf8').returns(input_file);
            m = my_lib.read_input();
            assert.equal(m.get_cols(),4)
            assert.equal(m.get_rows(),3)
        })
        //read_golden
        it("test read_golden", () => {
            fs_stub.withArgs('golden.txt', 'utf8').returns(golden_file);
            golden = my_lib.read_golden();
            assert.deepEqual(['1','2','3'],golden)
        })
    });
    describe("Gauss tests", function() {
        it("test gauss_forward", function() {
            matrix_instance = new matrix(2)
            const matrix_mock = sinon.mock(matrix_instance);
            matrix_mock.expects('get_rows').once().returns(2);
            matrix_mock.expects('get_cols').once().returns(3);
            matrix_mock.expects('get').withArgs(0, 0).atLeast(1).returns(3);
            matrix_mock.expects('get').withArgs(1, 0).returns(8);
            matrix_mock.expects('mull_add').withArgs(1,0,-8/3).once();
            matrix_mock.expects('swap_with_nonzero_row').never();
            my_lib.gauss_forward(matrix_instance);
            matrix_mock.verify();
            
        })

        //gauss_backward
        it("test gauss_backward", function() {
            matrix_instance = new matrix(2)
            const matrix_mock = sinon.mock(matrix_instance);
            matrix_mock.expects('get_rows').once().returns(2);
            matrix_mock.expects('get_cols').once().returns(3);
            matrix_mock.expects('get').withArgs(1, 2).once().returns(40);
            matrix_mock.expects('get').withArgs(1, 1).once().returns(8);
            matrix_mock.expects('get').withArgs(0, 1).once().returns(6);
            matrix_mock.expects('get').withArgs(0, 2).once().returns(9);
            matrix_mock.expects('get').withArgs(0, 0).once().returns(3);
            my_lib.gauss_backward(matrix_instance);
            matrix_mock.verify();
            
        })
        //gauss
        it("test gauss", () => {
            matrix_instance = new matrix(2)
            const matrix_mock = sinon.mock(matrix_instance);
            result = my_lib.gauss(matrix_instance);
            assert.ok(result==null);
            matrix_mock.verify();
        });

    });
});