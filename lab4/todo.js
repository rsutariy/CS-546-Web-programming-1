const mongoCollections = require('./mongoCollections');
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');

let exportedMethods = {
createTask(title,description){
            if (!title) 
                return Promise.reject("You must provide an title for task");
            if (typeof title !== 'string') 
                return Promise.reject("You must provide an title in String Format.");
            if (!description) 
                return Promise.reject("You must provide an description for task");
            if (typeof description !== 'string') 
                return Promise.reject("You must provide an description in String Format.");

            return todoItems().then((todoCollection) => {
                let newTask = {
                    _id: uuidv4(),
                    title: title,
                    description: description,
                    completed: false,
                    completedAt: null
                };

            return todoCollection
                .insertOne(newTask)
                    .then((newInsertInformation) => {
                        if(newInsertInformation == undefined || newInsertInformation == null)
                            return Promise.reject("Sorry! There is an error. We can't create new task.");
                    return newInsertInformation.insertedId;
                })
                .then((newId) => {
                    return this.getTask(newId);
                })
            });  
       
},
getAllTasks(){
               return todoItems().then((todoCollection) => {
                return todoCollection.find().toArray().then((finalarray)=>{
                        return finalarray;
                    });
                });
},

getTask(id){
                if (!id) 
                    return Promise.reject("You must provide an id to get a specific task");
        
            return todoItems().
                then((todoCollection) => {
                   let task= todoCollection.findOne({_id: id});
                   if(task==null)
                        return Promise.reject("Task does not Exist!")
                    else
                        return todoCollection.findOne({_id: id});
            });
},

completeTask(taskId) {
                 if (!taskId) 
                    return Promise.reject("You must provide an taskId");
                
                return todoItems().then((todoCollection) => {
                    let updatedTask= {
                        $set:
                        {
                            completed: true,
                            completedAt: Date.now()
                        }
                        
                };

                return todoCollection.
                    updateOne({_id: taskId}, updatedTask)
                        .then((updateinformation) => {
                            if(updateinformation)
                                return this.getTask(taskId);
                            else
                            Promise.reject("Could not Update the task")
             });
            });
},
removeTask(id) {
                if (!id) 
                    return Promise.reject("You must provide an id to remove specific task");
        
            return todoItems().then((todoCollection) => {
            return todoCollection.removeOne({_id: id})
                .then((deletionInfo) => {


                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete any task with id of ${id}")
                    }
                });
            });
}
}
module.exports = exportedMethods;
            

