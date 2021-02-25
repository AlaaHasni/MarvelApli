import { Component, OnInit, Input } from '@angular/core';
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
 @Input() page : number = 0 ;
  constructor(private marvelService: MarvelService){
  }

  ngOnInit(){
    this.marvelService.getCaracters(this.page).then(response =>  <MarvelInterface>response)
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

  decrement(){
      if (this.page > 0){
          this.page = this.page - 1; 
      }
      this.marvelService.getCaracters(this.page).then(response =>  <MarvelInterface>response)
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

  increment(){
        this.page = this.page + 1; 
        this.marvelService.getCaracters(this.page).then(response =>  <MarvelInterface>response)
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