import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 4040
const debug = new Debug('platzi-overflow:root')

/*const app = http.createServer((req,res) => {
  debug('New request')
  res.writeHead(200,{ 'Conten-Type': 'text/plain' })
  res.write('Hola desde PlatziOverflow')
  res.end()
})*/

app.listen(PORT, () => {
debug(`Hello world ${PORT}`);
})
