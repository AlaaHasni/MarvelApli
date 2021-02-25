import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./app.component.css']
})
export class MarvelComponent implements OnInit {
  constructor(private marvelService: MarvelService){
    console.log('is called')
    this.marvelService.getCaracters().then(reponse => {
        console.log(reponse)
    })
  }

  ngOnInit(){
      console.log('it working ')
  }

  
}