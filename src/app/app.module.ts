import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarvelService } from 'src/services/marvel.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './marvel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'caracters', component: MarvelComponent },
];

@NgModule({
  declarations: [
    AppComponent,MarvelComponent  
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
