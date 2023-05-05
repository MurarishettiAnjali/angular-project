import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { RouterModule, Routes } from '@angular/router';

// export const routes: Routes = [
//   {path: '', component: ForumComponent}
// ]

@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule
  ]
})
export class ForumsModule { }
