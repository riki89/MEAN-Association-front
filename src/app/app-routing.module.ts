import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContributionComponent } from './admin-contribution/admin-contribution.component';
import { ContributionsComponent } from './contributions/contributions.component';

const routes: Routes = [
  {path:'',component: ContributionsComponent},
  {path: 'finance', component: AdminContributionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
