import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Heworld Lo'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
