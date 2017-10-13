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
            errorHandler(err, 'Erro ao listar os itens', reject)
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
            errorHandler(err, 'Erro ao tentar salvar o item', reject)
            return false
          }
          resolve({
            status: 201,
            affectedRows: result.affectedRows,
            message: 'Registro inserido com sucesso',
            id: result.insertId
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
          if (err || !result.affectedRows) {
            errorHandler(err, `Erro ao tentar atualizar o item #${id}`, reject)
            return false
          }
          resolve({
            status: 200,
            affectedRows: result.affectedRows,
            message: 'Item atualizado com sucesso',
            data: {
              title: fields.title,
              description: fields.description
            }
          })
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
            errorHandler(err, `Erro ao tentar deletar o item #${id}`, reject)
            return false
          }
          if (result.affectedRows) {
            resolve({
              status: 200,
              affectedRows: result.affectedRows,
              message: 'Item removido com sucesso'
            })
          } else {
            resolve({
              error: `Item não existe`,
              code: 404
            })
          }
        })
      })
    }
  }
}
