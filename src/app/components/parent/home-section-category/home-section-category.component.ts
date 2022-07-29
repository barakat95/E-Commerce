import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-category',
  templateUrl: './home-section-category.component.html',
  styleUrls: ['./home-section-category.component.scss']
})
export class HomeSectionCategoryComponent implements OnInit {
  @Input() categoryGroupName: string = '';
  @Input() categoryGroupId: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
