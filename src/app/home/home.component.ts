import { TaskCardComponent } from './../task-card/task-card.component';
import { Component } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { AddButtonComponent } from "../add-button/add-button.component";
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopbarComponent, AddButtonComponent, TaskCardComponent, CommonModule, BoardComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {

  }
}
