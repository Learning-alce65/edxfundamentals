import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: 'home', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  /* { path: 'search', component: GitSearchComponent, data : {
    title: 'Git Search' // Buscando en GitHub
  }}, */
  { path: 'search', pathMatch: 'full', redirectTo: 'search/angular'},
  { path: 'search/:query', component: GitSearchComponent, data : {
    title: 'Git Search' // Buscando en GitHub
  }},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
