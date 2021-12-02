// 导入Node内置的 web server 模块
const http = require("http");

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

// 使用 createServer 创建一个新的 web 服务器
// 一个事件处理被注册到服务器，每次向服务器发出 HTTP 请求就会调用
const app = http.createServer((request, response) => {
  // 响应请求的状态代码为200，请求头
  response.writeHead(200, { "Content-Type": "application/json" });
  // 设置返回站点的内容
  response.end(JSON.stringify(notes));
});

const PORT = 3001;

// 监听发送到端口3001的HTTP请求
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
