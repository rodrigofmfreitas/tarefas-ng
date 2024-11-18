import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../home/Task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{
  protected task?: Task
  constructor(private route: ActivatedRoute, private taskService: TaskService) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const tasks = this.taskService.getTasks()
    this.task = tasks.find(task => task.id === id)
  }
}
