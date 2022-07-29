import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/List').List[]} */
  lists = [
    new List({
      id: 12,
      name: 'Chores',
      color: 'red'
    }),
    new List({
      id: 44,
      name: 'Shopping',
      color: 'orange'
    })
  ]

  /** @type {import('./Models/Task').Task[]} */
  tasks = [
    new Task({
      name: 'Walk the dog',
      listId: 12
    }),
    new Task({
      name: 'Buy Milk',
      listId: 44
    }),
    new Task({
      name: 'Wash the car',
      listId: 12
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
