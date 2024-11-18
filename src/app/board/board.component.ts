import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../home/Task';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../add-button/add-button.component';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskCardComponent, CommonModule, AddButtonComponent, CardComponent, RouterLink, TopbarComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  protected tasks: Task[] = []

  constructor(private taskService: TaskService) {
  }

  onTaskDeleted(id: string) {
    this.tasks = this.taskService.removeTask(id)
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }
}
