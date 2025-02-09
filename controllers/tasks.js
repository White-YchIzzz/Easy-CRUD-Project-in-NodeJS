function getAllTasks(req, res) {
  console.log("查询全部tasks");
  res.send();
}

function getTask(req, res) {
  console.log("查询单条task");
  res.send();
}

function createTask(req, res) {
  console.log("新增task");
  res.send();
}

function updateTask(req, res) {
  console.log("修改task");
  res.send();
}

function deleteTask(req, res) {
  console.log("删除task");
  res.send();
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
