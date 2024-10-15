
exports.equal = function equal(m1, m2){
    return JSON.stringify(m1) == JSON.stringify(m2);
}

exports.add = function add(m1, m2){
    return m1.map(function (row, row_i) {
        return row.map(function (num, num_i){
            return num + m2[row_i][num_i];
        });
      });
}