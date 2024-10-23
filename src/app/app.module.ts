import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule } from '@angular/forms';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { ShowValInclusChPipe } from './show-val-inclus-ch.pipe';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';
import { UserModuleModule } from './user-module/user-module.module';
import { ProductModuleModule } from './product-module/product-module.module';
import { ProviderModuleModule } from './provider-module/provider-module.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponentComponent,
    ShowValInclusChPipe,
    HighlightDirectiveDirective,
    NotFoundPageComponent,
    DetailsCategoryComponentComponent,

 
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
