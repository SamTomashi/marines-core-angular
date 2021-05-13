import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoDirectivePipeComponent } from './demo-directive-pipe/demo-directive-pipe.component';
import { DemoDirective } from './directives/demo.directive';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactUsComponent,
    HighlightDirective,
    DemoDirectivePipeComponent,
    DemoDirective,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
