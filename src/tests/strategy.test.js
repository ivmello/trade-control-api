const test = require('ava')
const db = require('./setup')

// trunca a tabela antes e depois de executar os testes
test.beforeEach(async t => db.models.strategy.truncate())
test.after.always(async t => db.models.strategy.truncate())

// metodo que cria o item para que ele seja usado nos testes de atualização e remoção
const createItem = () => db.models.strategy.create({ title: 'title', description: 'description' })

test('#Strategy - Listar todos ', async t => {
  await createItem()
  await createItem()
  await createItem()
  const list = await db.models.strategy.all()

  t.is(list.data[0].id, 1)
})

test('#Strategy - Criar ', async t => {
  const result = await createItem()

  t.is(result.status, 201)
  t.is(result.affectedRows, 1)
})

test('#Strategy - Atualizar', async t => {
  const result = await createItem()
  const updated = await db.models.strategy.update(result.id, { title: 'title changed', description: 'description' })

  t.is(updated.affectedRows, 1)
  t.is(updated.data.title, 'title changed')
})

test('#Strategy - Remover', async t => {
  const result = await createItem()
  const removed = await db.models.strategy.destroy(result.id)

  t.is(removed.affectedRows, 1)
})
