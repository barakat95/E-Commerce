import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-circular-categories',
  templateUrl: './home-circular-categories.component.html',
  styleUrls: ['./home-circular-categories.component.scss']
})
export class HomeCircularCategoriesComponent implements OnInit {

  categories: string[] = ['https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
    'https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=612x612&w=0&h=c5rP2tqv0Uck6zm21hBYhEyVy9EBAA7C5VGI4sgfmzo=',
    'https://media.istockphoto.com/photos/modern-laptop-and-smartphone-isolated-on-white-picture-id868640082?k=20&m=868640082&s=612x612&w=0&h=GLsJGcs1lLD8CvgZsek_hGiwSbyoJGWYze-0RxFjR9Y=',
    'https://d1jqecz1iy566e.cloudfront.net/large/fa088.jpg',
    'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg',
    'https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=612x612&w=0&h=c5rP2tqv0Uck6zm21hBYhEyVy9EBAA7C5VGI4sgfmzo=',
    'https://media.istockphoto.com/photos/modern-laptop-and-smartphone-isolated-on-white-picture-id868640082?k=20&m=868640082&s=612x612&w=0&h=GLsJGcs1lLD8CvgZsek_hGiwSbyoJGWYze-0RxFjR9Y=',
    'https://d1jqecz1iy566e.cloudfront.net/large/fa088.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
