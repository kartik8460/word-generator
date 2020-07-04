import { Component } from '@angular/core';
import arrayWords from "../utils/words";
import arrayCountries from "../utils/country";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words: string = '';
  limit = 10;
  random: number;
  handleSlideChange = (newLimit: number) => {
    this.limit = newLimit;
  }

  generate = () => {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  randomCountry = () => {
    this.random = Math.floor(Math.random()*(arrayCountries.length-0+1)+0);
    this.words = arrayCountries[this.random];
  }
}
