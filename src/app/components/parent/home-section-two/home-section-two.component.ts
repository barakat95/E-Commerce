import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-two',
  templateUrl: './home-section-two.component.html',
  styleUrls: ['./home-section-two.component.scss']
})
export class HomeSectionTwoComponent implements OnInit {
  cardList = [
    {
      title: 'Card Title',
      price: '35,000$',
      category: 'Category',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, et?',
      image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
      vote: '4',
      id: 1
    },
    {
      title: 'Card Title',
      price: '35,000$',
      category: 'Category',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, et?',
      image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
      vote: '4',
      id: 2
    },
    {
      title: 'Card Title',
      price: '35,000$',
      category: 'Category',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, et?',
      image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
      vote: '4',
      id: 3
    },
    {
      title: 'Card Title',
      price: '35,000$',
      category: 'Category',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, et?',
      image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
      vote: '4',
      id: 4
    },
    {
      title: 'Card Title',
      price: '35,000$',
      category: 'Category',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, et?',
      image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
      vote: '4',
      id: 5
    },
    {
      title: 'Card Title',
      price: '35,000$',
      category: 'Category',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, et?',
      image: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
      vote: '4',
      id: 6
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
