import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5'

@Injectable({
  providedIn: 'root',
})
export class MarvelService {

    constructor(private http: HttpClient){

    }

    getCaracters(){
        let url = "http://gateway.marvel.com/v1/public/characters";
        let publicKey = "d82f87f1344cc3f08b5ca4bd77e86528";
        let privateKey = "50a39761a53ade28dc871e50c298531ab02ea2ca";

        let hash = Md5.hashStr('1' + privateKey + publicKey).toString()
        let params = new HttpParams()
        .set('ts', '1')
        .set('apikey', publicKey)
        .set('hash', hash); 

        return this.http.get(url,{
            params: params
            }
        ).toPromise();
    }
}