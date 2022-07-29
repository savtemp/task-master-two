import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService{

    createList(newList){
        ProxyState.lists = [...ProxyState.lists, new List(newList)]
    }

    deleteList(id){
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    }
}


export const listsService = new ListsService()
