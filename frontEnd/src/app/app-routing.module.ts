import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { MainComponent } from './main/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'welcome',
        pathMatch:'full'
      },
      {
        path:'welcome',
        component: WelcomeComponent
      },
      {
        path:'auth',
        component:AuthComponent,
        loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
      },
      {
        path:'main',
        component: MainComponent,
        loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
      },
      {
        path:'**',
        component: NotFoundComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
