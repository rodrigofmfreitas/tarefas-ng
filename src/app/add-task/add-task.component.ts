import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Task } from '../home/Task';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{
  protected task!: Task
  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.task = this.taskService.createTask()
  }

  addTask() {
    this.taskService.addTask(this.task)
  }

  onClick(tipo: string) {
    this.task.category = tipo
  }
}
