import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CommentComponent } from '../../pages/comment/comment.component';
import { AnaliticsComponent } from '../../pages/analitics/analitics.component';
import { ContentComponent } from '../../pages/content/content.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'analytics', component: AnaliticsComponent },
  { path: 'content', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
