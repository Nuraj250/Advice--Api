import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceComponent } from './advice/advice.component';
import { AdviceResolver } from './advice/advice.resolver';

const routes: Routes = [
  {
    path: 'advice',
    component: AdviceComponent,
    data: { title: 'Advice' },
    resolve: { advice:AdviceResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
