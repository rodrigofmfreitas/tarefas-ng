import { Injectable } from '@angular/core';
import { Task } from './home/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
  {
    id: '1',
    name: "Fazer AAI",
    priority: "Alta",
    limitDate: new Date("2024-11-29"),
    category: "Trabalho"
  }, {
    id: "2",
    name: "Fazer Prova",
    priority: "Baixa",
    limitDate: new Date(),
    category: "Doméstico"
  }
  ]
  constructor() { }

  createTask() {
    return {
      id: Math.random().toString(),
      name: "",
      priority: "",
      limitDate: new Date(),
      category: ""
    }
  }

  addTask(task: Task) {
    this.tasks.push(task)
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
    return this.tasks
  }

  getTasks() {
    return this.tasks
  }

  editTask(task: Task) {
    const index = this.tasks.findIndex(x => x.id === task.id)
    this.tasks[index] = task
  }
}
