import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../services/git-search.service';
import { GitSearch } from '../git-search.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
})
export class GitSearchComponent implements OnInit {
  title: string;
  searchQuery: string;
  displayQuery: string;
  searchResults: GitSearch;

  constructor(private gitSearchService: GitSearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* this.route.data.subscribe( (result) => {
      this.title = result.title;
    }); */
    this.title = this.route.snapshot.data.title;
    this.searchQuery = this.route.snapshot.params.query;
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }

  gitSearch = () => {
    // query = '&&&&&&'; // para generar un error
    if (!this.searchQuery) {return; }
    this.gitSearchService.gitSearch(this.searchQuery)
    .then( (response) => {
      this.displayQuery = this.searchQuery;
      this.searchResults = response;
    }, (error) => {
      console.log('Error: ', error.statusText);
    });
  }

}
