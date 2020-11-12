import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card'

@Injectable({
    providedIn: 'root'
})
export class CardService {
    card: Card[];

    constructor(private http: HttpClient) { }

    registerUser(card: Card) {
        return this.http.post("http://localhost:8080/cardUser", card);
    }


}
