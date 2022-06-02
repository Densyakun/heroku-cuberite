const fastify = require('fastify')()
fastify.register(require('@fastify/websocket'))
const { toTCPOnConnection } = require('tcp-websocket-tunnel')
await fastify.register(require('fastify-express'))
const { createProxyMiddleware } = require('http-proxy-middleware')

fastify.get('/ws', { websocket: true }, (connection, req) => toTCPOnConnection(connection.socket, 25565, 'localhost'))

fastify.use(
  '/webadmin',
  createProxyMiddleware({
    target: `http://localhost:${process.env.CUBERITE_WEBADMIN_PORT}`,
    changeOrigin: true,
  })
)

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()