import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';
import { GitSearch } from '../git-search.interface';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
})
export class GitSearchComponent implements OnInit {
  title: string;
  searchQuery: string;
  searchResults: GitSearch;

  constructor(private gitSearchService: GitSearchService) { }

  ngOnInit() {
    this.title = 'Buscando en GitHub';
  }

  gitSearch = () => {
    // query = '&&&&&&'; // para generar un error
    if (!this.searchQuery) {return; }
    this.gitSearchService.gitSearch(this.searchQuery)
    .then( (response) => {
      this.searchResults = response;
    }, (error) => {
      console.log('Error: ', error.statusText);
    });
  }

}
