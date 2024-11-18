import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../home/Task';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  @Input({required: false}) task!: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {

  }

  onClick(tipo: string) {
    this.task.category = tipo
  }

  editTask(task: Task) {
    this.taskService.editTask(task)
  }
}
