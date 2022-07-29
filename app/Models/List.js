import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
        this.color = data.color
    }

    get Template(){
        return `
            <div class="col-3 bg-white elevate-2 selectable no-select">
                <div class="row">
                    <div class="col-12">
                        <h3>${this.name}</h3>
                        <p onclick="app.listsController.deleteList('${this.id}')">X</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul>${this.TasksTemplate}</ul>
                    </div>
                </div>
                <form class="row" onsubmit="app.tasksController.createTask('${this.id}')">
                    <div class="col-8">
                        <input name="name" id="name" class="form-control" type="text" placeholder="Add Task...">
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary">ADD</button>
                    </div>
                </form>
            </div>
        `
    }


    get TasksTemplate(){
        let template = ''
        ProxyState.tasks
        .filter(t => t.listId == this.id)
        .forEach(t => template += t.Template)

        return template
    }
}