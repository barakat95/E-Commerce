import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-releases-section',
  templateUrl: './latest-releases-section.component.html',
  styleUrls: ['./latest-releases-section.component.scss']
})
export class LatestReleasesSectionComponent implements OnInit {
  cardList = [
    {
      id: 1,
      title: "The Witcher",
      image: "https://m.media-amazon.com/images/I/61YvHa6o94L._SX522_.jpg",
      itemName: "Wild Hunt",
      background:"#ff4747"
    },
    {
      id: 2,
      title: "The Witcher",
      image: "https://tradelinestores.s3.amazonaws.com/media/product_images/6636657d-3e22-44e4-a530-adecc62ff304.png",
      itemName: "Wild Hunt",
      background:"#f19d50"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
