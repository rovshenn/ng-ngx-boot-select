import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';

export interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  text1: string;
  text2: string;
  name = 1;
  points: Point[] = [];

  drawPoint (point: Point) {
    this.name =  point.x + point.y + <number>this.name;
    point.y = this.name;
    this.points.push(point);
    this.setClasses();
  }

  setClasses () {
    return {color: name, acive: name};
  }
}
