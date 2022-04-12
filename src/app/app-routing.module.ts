import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FooterComponent} from '../app/footer/footer.component'

const routes: Routes = [

  {path: 'footer', component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
