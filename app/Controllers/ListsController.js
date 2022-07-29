import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { saveState } from "../Utils/LocalStorage.js";
import { loadState } from "../Utils/LocalStorage.js";

function _draw(){
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template 
}

export class ListsController{
    constructor(){
        console.log('lists controller loaded');
        ProxyState.on('lists', _draw)
        ProxyState.on('tasks', _draw)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', saveState)
        loadState()
        _draw()
    }


    createList(){
        window.event.preventDefault()
        console.log('creating list');
        let form = window.event.target
        let newList = {
            name: form.name.value,
        }
        listsService.createList(newList)
    }

    deleteList(id){
        listsService.deleteList(id)
    }




}

