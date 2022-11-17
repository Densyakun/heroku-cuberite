const fastify = require('fastify')()
fastify.register(require('@fastify/websocket'))
const { toTCPOnConnection } = require('tcp-websocket-tunnel')
const proxy = require('@fastify/http-proxy')

fastify.get('/ws', { websocket: true }, async (connection, req) => toTCPOnConnection(connection.socket, 25565, 'localhost'))

fastify.register(proxy, {
  upstream: `http://localhost:${process.env.CUBERITE_WEBADMIN_PORT || 8080}`,
  prefix: '/',
})

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

const onSignal = (signal) => {
  console.log(`Got ${signal}.`)
  process.exit(1)
}
process.on('SIGTERM', onSignal)
