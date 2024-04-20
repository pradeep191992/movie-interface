import { Component, Input, OnInit } from '@angular/core';
import { ResultList } from 'src/app/modals/movie-interface.modal';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() searchData!: ResultList;
  constructor() { }

  ngOnInit(): void {
  }

  goToDetail(event: any) {
    console.log(event);
  }

}
