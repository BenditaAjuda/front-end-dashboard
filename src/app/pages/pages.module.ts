import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { AnaliticsComponent } from './analitics/analitics.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    AnaliticsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
