// 使用express实现服务器
// express 是一个 function，用于创建一个存储在 app 变量中的 express 应用
const express = require("express");
const app = express();

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

// 两个路由，处理对不同的路由发出的 HTTP GET 请求
// 处理 / 根路由
// request 参数包含 HTTP 请求的所有信息
// response 参数定义请求的相应方式
app.get("/", (req, res) => {
  // 请求通过 response 对象的 send 方法应答
  res.send("<h1>Hello world!</h1>");
});

// 处理 /api/notes路由
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
