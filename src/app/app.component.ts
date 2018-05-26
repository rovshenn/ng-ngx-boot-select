import { Component } from '@angular/core';

export interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  name = 1;

  drawPoint (point: Point) {
    this.name =  point.x + point.y + this.name;
  }
}
