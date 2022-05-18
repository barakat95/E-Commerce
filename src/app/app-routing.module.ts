import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: 'authentication', loadChildren: () => import('./modules/authenication/authenication.module').then(m => m.AuthenicationModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: ParentComponent, children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
