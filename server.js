const fastify = require('fastify')()
fastify.register(require('@fastify/websocket'))
const { toTCPOnConnection } = require('tcp-websocket-tunnel')

fastify.get('/ws', { websocket: true }, (connection, req) => toTCPOnConnection(connection.socket, 25565, 'localhost'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()