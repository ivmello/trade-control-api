module.exports = (params) => {
  const { conn, errorHandler } = params
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const sql = `
          SELECT * 
          FROM tbl_strategy
          WHERE active = 1
        `
        conn.query(sql, (err, result) => {
          if (err) {
            errorHandler(err, 'Error to fetch strategies', reject)
            return false
          }
          resolve({
            status: 200,
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
    create: (fields) => {
      return new Promise((resolve, reject) => {
        const sql = `
          INSERT INTO tbl_strategy (title, description)
          VALUES (?,?)
        `
        const params = [fields.title, fields.description]

        conn.query(sql, params, (err, result) => {
          if (err) {
            errorHandler(err, 'Error on save item', reject)
            return false
          }
          resolve({
            status: 201,
            data: {
              id: result.insertId,
              message: 'Item successfully created'
            }
          })
        })
      })
    },
    update: (id, fields) => {
      return new Promise((resolve, reject) => {
        const sql = `
          UPDATE tbl_strategy
          SET title = ?, description = ?
          WHERE id = ?
        `
        const params = [fields.title, fields.description, id]

        conn.query(sql, params, (err, result) => {
          if (err) {
            errorHandler(err, `Error on update item #${id}`, reject)
            return false
          }

          if (result.affectedRows) {
            resolve({
              status: 200,
              data: {
                id,
                message: 'Item successfully updated'
              }
            })
          } else {
            resolve({
              error: `Item do not exists`,
              code: 404
            })
          }
        })
      })
    },
    destroy: (id, fields) => {
      return new Promise((resolve, reject) => {
        const sql = `
          DELETE FROM tbl_strategy
          WHERE id = ?
        `
        const params = [id]

        conn.query(sql, params, (err, result) => {
          if (err) {
            errorHandler(err, `Error on delete item #${id}`, reject)
            return false
          }
          if (result.affectedRows) {
            resolve({
              status: 200,
              data: {
                id,
                message: 'Item successfully removed'
              }
            })
          } else {
            resolve({
              error: `Item do not exists`,
              code: 404
            })
          }
        })
      })
    }
  }
}
