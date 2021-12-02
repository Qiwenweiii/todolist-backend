// 导入Node内置的 web server 模块
const http = require("http");

// 使用 createServer 创建一个新的 web 服务器
// 一个事件处理被注册到服务器，每次向服务器发出 HTTP 请求就会调用
const app = http.createServer((request, response) => {
  // 响应请求的状态代码为200
  response.writeHead(200, { "Content-Type": "text/plain" });
  // 返回站点的内容设置为 Hello world
  response.end("Hello world");
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
