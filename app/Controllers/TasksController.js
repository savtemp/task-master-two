import { tasksService } from "../Services/TasksService.js";

export class TasksController{
    constructor(){
        console.log('tasks controller loaded');
    }

    createTask(listId){
        window.event.preventDefault()
        console.log('creating task', listId);
        let form = window.event.target
        let newTask = {
            name: form.name.value,
            listId: listId
        }
        console.log(newTask);
        tasksService.createTask(newTask)
    }

    deleteTask(id){
        if(window.confirm()){
            tasksService.deleteTask(id)
        }
    }
}

