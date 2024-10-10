import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { ShowValInclusChPipe } from './show-val-inclus-ch.pipe';
import { HighlightDirectiveDirective } from './highlight-directive.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponentComponent,
    ShowValInclusChPipe,
    HighlightDirectiveDirective,
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
