const express = require("express");
const app = express();
const port = 5000;

// express.static基于serve-static实现，serve-static默认会send index.html文件作为相应结果返回
app.use(express.static("./public"));

// function getAllTasks(req, res) {
//   console.log("查询全部tasks");
//   res.send();
// }

// function createTask(req, res) {
//   console.log("新增task");
//   res.send();
// }

// function updateTask(req, res) {
//   console.log("修改task");
//   res.send();
// }

// function deleteTask(req, res) {
//   console.log("删除task");
//   res.send();
// }

// app.get("/api/task/get", getAllTasks);
// app.post("/api/task/add", createTask);
// app.patch("/api/task/update", updateTask);
// app.delete("/api/task/delete", deleteTask);

// app.use("/api/tasks")

app.listen(port, () => console.log("app start at port " + port));
