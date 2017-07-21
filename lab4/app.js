const todo = require('./todo');
const connection = require("./mongoConnection");


let createdTask = todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

let newcreatedTask= createdTask.then((newTask) => {
    console.log(newTask);
    return todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?"); 
});

let queryallTasks = newcreatedTask.then(() => {
    return todo.getAllTasks();
});

let logallTasks=queryallTasks.then((logallTask) =>{
    console.log("-----------Retrieving all Tasks----------------");
    console.log(logallTask);
    return todo.getAllTasks();
});


let removeFirstTask = logallTasks.then((tasks) => {
   console.log("-------------Removing First Task---------------");
   console.log(tasks[0]._id);
   return todo.removeTask(tasks[0]._id)
       
       
});


let queryAllTasksafterremovefirstTask = removeFirstTask.then(() => {
    return todo.getAllTasks()
        .then((alltasks) => {
            console.log("-------------Getting All Tasks---------------");
            console.log(alltasks);
            return alltasks;
        })
       
});

let completeremainingTasks = queryAllTasksafterremovefirstTask.then((CompletedTask) => {
    console.log("------------Completing Remaining Tasks------------");

    for (let i = 0;i< CompletedTask.length; i++) {
        todo.completeTask(CompletedTask[i]._id);
       console.log(CompletedTask[i]._id);
    }
    return;

});


let displayallTasks = completeremainingTasks.then(() => {
    return todo.getAllTasks()
        .then((tasks) => {
            console.log("-------------Display Updated Tasks---------------");
            console.log(tasks);
            return tasks;
        })
       
});



    