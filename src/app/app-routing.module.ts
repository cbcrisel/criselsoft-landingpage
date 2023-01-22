import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './components/layout/layout-base/layout-base.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
{
  path:'start',
  component:LayoutBaseComponent,
  children:[
    {path:'',loadChildren:()=>import('./pages/start/start.module').then((m)=>m.StartModule)}
  ]
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'**',redirectTo:'start',pathMatch:'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
