import http from 'http';
import { sendMessageGetMethod, sendMessagePostMethod, join } from './slack';
import { shap } from './shap';

const server = http.createServer(async (req, res) => {
  await join();
  if(req.url === '/' && req.method === 'GET') {
    sendMessageGetMethod();
    res.end(); 
  } else if(req.url === '/' && req.method === 'POST') {
    let data = '';
    req.on('data', (chunk) => { 
      data += chunk;
    }).on('end', () => {
      let shap_data = shap(data);
      sendMessagePostMethod(shap_data);
    })
    res.end();
  }
});

const port = 8080;
server.listen(process.env.PORT || port);
