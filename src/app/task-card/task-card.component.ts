import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../home/Task';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input({required: true}) task!: Task;
  @Output() deleteClicked = new EventEmitter<string>()
  constructor() {
  }
}
