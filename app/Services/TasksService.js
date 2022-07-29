import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService{
    deleteTask(id){
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    }

    createTask(newTask){
        console.log('creating task in service', newTask);
        ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
        console.log(ProxyState.tasks);
    }
}


export const tasksService = new TasksService()

