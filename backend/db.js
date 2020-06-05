var mariadb = require('mariadb');
exports.MODE_TEXT = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
    pool: null,
    mode: null
};


exports.connect = function(mode, done) {
    state.pool = mariadb.createPool({
        user: 'root',
        password: '1234',
        database: 'ValorGuide'
      });

      state.mode = mode;
      done();
};

exports.get = function() {
    return state.pool;
};

exports.getAgents = function (sucessCb, errCb){
    var sql = "SELECT * FROM agents;";
    this.get()
        .query(
            {sql: sql},
            []
        )
        .then(sucessCb)
        .catch(errCb);
}

