import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { DatePipe } from '@angular/common'
import { CardService } from '../cardService'
import * as moment from 'moment';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  providers: [DatePipe],
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {


  submitted = false;
  card: Card = new Card();
  today: string;



  constructor(private service: CardService, public datepipe: DatePipe) {

  }

  ngOnInit(): void {

    this.today = moment(new Date()).format('YYYY-MM-DD')
  }
  newUser(): void {
    this.submitted = false;
    this.card = new Card();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    console.log(this.card);
    this.service.registerUser(this.card)
      .subscribe(data => console.log(data), error => console.log(error));
    this.card = new Card();

  }
}
