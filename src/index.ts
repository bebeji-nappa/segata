import http from 'http';
import { postMessage, join } from './slack';

const server = http.createServer(async (req, res) => {
  if(req.url === '/') {
    await join();
    postMessage();
    res.end(); 
  }
});

const port = 8080;
server.listen(process.env.PORT || port);
