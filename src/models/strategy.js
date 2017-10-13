const conn = require('../services/database')

module.exports = {
  all: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM tbl_strategy', (err, result) => {
        if (err) reject(err)
        resolve({
          data: result,
          pagination: {
            page: 1,
            total_pages: 1,
            per_page: 10,
            total_results: result.length
          }
        })
      })
    })
  },
  save: (obj) => {},
  update: (id, obj) => {}
}
