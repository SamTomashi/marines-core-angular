import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DemoDirectivePipeComponent } from './demo-directive-pipe/demo-directive-pipe.component';
import { LoginComponent } from './login/login.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "contact",
    component: ContactUsComponent

  },
  {
    path: "directive",
    component: DemoDirectivePipeComponent

  },
  {
    path: "quote",
    component: QuotesComponent

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
