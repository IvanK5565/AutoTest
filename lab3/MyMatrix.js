
exports.MyMatrix = class MyMatrix{
    constructor(n) {
        this.n = n;
        this.mockMatrix = Array.from({ length: n }, () => Array(n + 1).fill(0));
    }

    // Mocking the get_matrix method
    get_matrix(n) {
        return Array.from({ length: n }, () => Array(n + 1).fill(0));
    }

    printm() {
        console.log('Mocked print function called');
    }

    get_rows() {
        return this.mockMatrix.length;
    }

    get_cols() {
        return this.mockMatrix[0].length;
    }

    mull_add(i, j, d) {
        console.log(`Mocked mull_add called with i=${i}, j=${j}, d=${d}`);
        // Here you could simulate adding behavior if necessary
    }

    exists_wrong_row() {
        console.log('Mocked exists_wrong_row called');
        return false; // or true based on your test case
    }

    exists_zero_row() {
        console.log('Mocked exists_zero_row called');
        return true; // or false based on your test case
    }

    swap_with_nonzero_row(i) {
        console.log(`Mocked swap_with_nonzero_row called with i=${i}`);
        // Simulate the behavior if needed
    }

    get(i, j) {
        console.log(`Mocked get called with i=${i}, j=${j}`);
        return this.mockMatrix[i][j]; // This can be mocked to return a specific value
    }

    set(i, j, d) {
        console.log(`Mocked set called with i=${i}, j=${j}, d=${d}`);
        // Here you could store a value or perform other mock behavior
    }
}