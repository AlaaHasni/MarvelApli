import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/services/marvel.service';

export interface MarvelInterface {
    code : number, 
    data : {
        results: [HeroInterface]
    }
}


export interface HeroInterface {
    name: string, 
}

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./app.component.css']
})
export class MarvelComponent implements OnInit {

 caracters : any; 
 auth : any;
  constructor(private marvelService: MarvelService){
   
  }

  ngOnInit(){
    this.marvelService.getCaracters().then(response =>  <MarvelInterface>response)
    .then((list) => {
        if (list.code == 200 ){
            this.caracters = list.data.results;
            console.log(this.caracters)
        }
        else { 
            this.caracters = []
        }
    })

  }

  
}