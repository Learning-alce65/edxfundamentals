import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template : `
    <header><h1>{{title}}</h1></header>
    <section><app-git-search></app-git-search></section>`,
  styleUrls: ['./app.component.css'],
  styles: [
    'header { background-color: brown; padding: 2rem;}',
    'h1 { color: bisque}',
    'section { text-align:center}'
  ]
})
export class AppComponent implements OnInit {

  title: string ;
  constructor () {
  }

  ngOnInit () {
    this.title = 'GitHub Browser';
  }

}
