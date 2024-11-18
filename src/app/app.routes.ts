import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
  {path: 'board', component: BoardComponent},
  {path: 'add', component: AddTaskComponent},
  {path: 'task/:id', component: EditTaskComponent},
  {path: '', component: BoardComponent},
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
