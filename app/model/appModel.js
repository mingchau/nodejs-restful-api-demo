'use strict';

var sql = require('./db');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.createTask = function (newTask, result) {
    sql.query("INSERT INTO TASKS SET ?", newTask, function (err, res) {
        if (err) {
            console.log('error', err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Task.getTaskById = function (taskId, result) {
    sql.query("SELECT TASK FROM TASKS WHERE ID=?", taskId, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Task.getAllTask = function (result) {
    sql.query("SELECT * FROM TASKS", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('tasks: ', res);
            result(null, res)
        }
    });
};

Task.updateById = function (id, task, result) {
    sql.query("UPDATE TASKS SET TASK=? WHERE ID=?", [task.task, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Task.remove = function (id, result) {
    sql.query("DELETE FROM TASKS WHERE ID=?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Task;