import { Component } from '@angular/core';
import arrays from '../utils/words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limits = 10;

  handleSliderChange(newLimit:Event){
    let htmlElement = newLimit.target as HTMLInputElement;
    this.limits=parseInt(htmlElement.value);
  }

  generate(){
    this.words=arrays.slice(0,this.limits).join(" ")
  }

}
