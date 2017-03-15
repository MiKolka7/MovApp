import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Movie } from './movie';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    constructor(private jsonp: Jsonp) { }
    private moviesUrl = 'https://api.themoviedb.org/3/';
    findPopularMovies(popular: string) {
        const endPoint = 'movie/popular';
        let params = new URLSearchParams();
        params.set('api_key', '1fc4006c54ca8559696ec59eb395a72f');
        params.set('popular', popular);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.moviesUrl + endPoint, { search: params })
            .map(response => <Movie[]>response.json().themoviedb.movies.movie);
    }

    // findMovieByGenre(id: string) {
    //     const endPoint = 'movie.get';
    //     let params = new URLSearchParams();
    //     params.set('key', '1fc4006c54ca8559696ec59eb395a72f');
    //     params.set('id', id);
    //     params.set('format', 'json');
    //     params.set('callback', 'JSONP_CALLBACK');
    //     console.log(id);
    //     return this.jsonp
    //         .get(this.moviesUrl + endPoint, { search: params })
    //         .map(response => {
    //             console.log(response.json().themoviedb.movie);
    //             return response.json().themoviedb.movie
    //         });
    // }

}