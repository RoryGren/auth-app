import { Component, OnInit } from '@angular/core';
import { movie } from '../movies/movies.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  movies: movie[] = [
    new movie("The Shawshank Redemption", "1994", "Frank Darabont", "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler"),
    new movie("Crocodile Dundee", "1986", "Peter Faiman", "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil"),
    new movie("Valkyrie", "2008", "Bryan Singer", "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson"),
    new movie("Ratatouille", "2007", "Brad Bird, Jan Pinkava", "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
