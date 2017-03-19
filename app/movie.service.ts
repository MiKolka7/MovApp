import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Movie } from './movie';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    constructor(private http: Http) { }
    private moviesUrl = 'https://api.themoviedb.org/3/';
    
    findPopularMovies(popular: string) {
        const endPoint = 'movie/popular';
        let params = new URLSearchParams();
        params.set('api_key', '1fc4006c54ca8559696ec59eb395a72f');
        params.set('popular', popular);
        return this.http
            .get(this.moviesUrl + endPoint, { search: params })
            .map(response => <Movie[]>response.json().results);
    }

    findMovieByGenre(id: string) {
        const endPoint = 'movie/' + id;
        let params = new URLSearchParams();
        params.set('api_key', '1fc4006c54ca8559696ec59eb395a72f');
        return this.http
            .get(this.moviesUrl + endPoint, { search: params })
            .map(response => response.json());
    }

}
