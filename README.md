# heroku-cuberite

Cuberite server on Heroku.

- Heroku Buildpack: Node.js
- Backend: Fastify

## Deploy to Heroku

1. [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2. (Option) Set Cuberite WebAdmin password to environment variables: `CUBERITE_WEBADMIN_PASSWORD`
3. (Option) Set Cuberite WebAdmin port to environment variables: `CUBERITE_WEBADMIN_PORT` (Default: 8080)

## Join to Cuberite server on Heroku

1. Run shell script in client:

```bash
npm install -g tcp-websocket-tunnel

tcp-websocket-tunnel --from 25565 --tows ws://*your-app-name*.herokuapp.com/ws
```

2. Launch minecraft client
3. Join to localhost
4. Joined to Cuberite server on Heroku

## Open to Cuberite WebAdmin

1. Open in browser:

`https://*your-app-name*.herokuapp.com`
