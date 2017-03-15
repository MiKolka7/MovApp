import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Observable } from 'rxjs/Observable';
import { Movie } from '../movie';

@Component({
  template: `
    <h2>Popular movies:</h2>
    <p>List of movies:</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let pop of pops | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">movies</i>
            <a [routerLink]="['/pops', pop.id.$t]">{{pop.name.$t}}</a>
        </span>
      </li>
    </ul>
    `
})
// Component class implementing OnInit
export class PopListComponent implements OnInit {
  // Private property for binding
  pops: Observable<Movie[]>;
  constructor(private movieService: MovieService) {

  }

  // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.pops = this.movieService.findPopularMovies('pop');
  }
}
