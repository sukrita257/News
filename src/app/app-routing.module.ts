import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { TrendingLeftComponent } from './trending-left/trending-left.component';

const routes: Routes = [
  {
    path: "news-details/:id",
    component: NewsDetailsComponent
  },
  {
    path: "",
    component: TrendingLeftComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
