// Imports
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div *ngIf="movie">
        <h2>{{movie.name.$t}}</h2>
    </div>
    `,
})
// Component class implementing OnInit
export class PopDetailsComponent implements OnInit {
    // Private properties for binding
    private sub: any;
    private pop: string[];

    constructor(private movieService: MovieService, private route: ActivatedRoute) {

    }

    // Load data ones componet is ready
    ngOnInit() {
        // Subscribe to route params
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
           
            this.movieService.findMovieByGenre(id).subscribe(pop => this.pop = pop);
        });
    }

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }
}