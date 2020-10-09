"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const slack_1 = require("./slack");
const server = http_1.default.createServer(async (req, res) => {
    if (req.url === '/') {
        await slack_1.join();
        slack_1.postMessage();
        res.end();
    }
});
const port = 8080;
server.listen(process.env.PORT || port);
