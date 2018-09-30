import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './services/git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string ;
  query: string;
  constructor (private gitSearchService: GitSearchService) {
  }

  ngOnInit () {
    this.title = 'GitHub Browser';
    this.query = 'Angular';
    // this.query = '&&&&&&'; // para generar un error
    this.gitSearchService.gitSearch(this.query)
    .then( (response) => {
      console.log('Total Libraries Found: ', response.total_count);
    }, (error) => {
      console.log('Error: ', error.statusText);
    });
  }

}
