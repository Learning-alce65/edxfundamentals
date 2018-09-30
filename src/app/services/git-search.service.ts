import { Injectable } from '@angular/core';
import { GitSearch } from '../git-search.interface';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GitSearchService {
  url: string:
  cachedValues: Array<{
    [query: string]: GitSearch}> ;

  constructor(private http: HttpClient) {
    this.cachedValues = [];
    this.url = 'https://api.github.com/search/repositories?q='
  }

  gitSearch = (query: string): Promise<GitSearch> => {
    const promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query]);
        } else {
          this.http.get( this.url + query)
          .toPromise()
          .then( (response) => {
              resolve(response as GitSearch);
          }, (error) => {
              reject(error);
          });
        }
    });
    return promise;
  }
}
