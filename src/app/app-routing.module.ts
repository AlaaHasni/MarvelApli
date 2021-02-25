import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelService } from 'src/services/marvel.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [MarvelService]
})
export class AppRoutingModule { }
