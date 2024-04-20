import { MainResponse, ResultList } from './../../modals/movie-interface.modal';
import { MovieService } from './../../service/movie.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  movieListData: ResultList[] = [];
  currentPage = 1;
  searchQuery = 'movie';
  totalPages = 0;
  pageSize = 10;

  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit() {
    // this.movieService.getListOfMovieDetails().subscribe(data => {
    //   console.log(data);
    //   this.movieListData = data.Search;
    // });
    this.loadMovies();
  }

  goToDetail(event: any) {
    console.log(event);
  }


  loadMovies() {
    this.movieService.getListOfMoviePaginatedList(this.currentPage, this.searchQuery).subscribe(response => {
      this.movieListData = response.Search;
      this.totalPages = Math.ceil(response.totalResults / this.pageSize);
    },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  // onPageChange(page: number): void {
  //   this.currentPage = page;
  //   this.loadMovies();
  // }

  // searchMovies(query: string): void {
  //   this.searchQuery = query;
  //   this.currentPage = 1;
  //   this.loadMovies();
  // }







}
