import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';



const routes: Routes = [
  { path: 'admin/usr', component: AdminDashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
