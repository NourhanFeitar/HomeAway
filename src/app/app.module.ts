import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ImageModule } from 'primeng/image';
import { BannerComponent } from './banner/banner.component';
import { FilterDialogueComponent } from './filter-dialogue/filter-dialogue.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FilterBarComponent,
    BannerComponent,
    FilterDialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    FormsModule,
    InputNumberModule,
    HttpClientModule,

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent,FilterDialogueComponent]
})
export class AppModule { }
