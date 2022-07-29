import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section-category',
  templateUrl: './home-section-category.component.html',
  styleUrls: ['./home-section-category.component.scss']
})
export class HomeSectionCategoryComponent implements OnInit {
  @Input() categoryGroupName: string = '';
  @Input() categoryGroupId: number = 0;

  categoryList = [
    {
      id: 1,
      image: 'https://www.notebookcheck.net/typo3temp/_processed_/e/0/csm_181004111903200301900006K_95047b6aab.jpg',
      title: 'Laptops',
    },
    {
      id: 2,
      image: 'https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/n/p/npttfyp_e9fbd8irau404ska.jpeg',
      title: 'Mobiles',
    },
    {
      id: 3,
      image: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/414562/1.jpg?7276',
      title: 'TVs',
    },
    {
      id: 4,
      image: 'https://target.scene7.com/is/image/Target/GUEST_5552d378-d1c0-44ac-b4f7-3f6e2e876c17',
      title: 'Audio',
    },
    {
      id: 5,
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX3Y2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1580420157712',
      title: 'Smart Watches',
    },
    {
      id: 6,
      image: 'https://i5.walmartimages.com/asr/262923c6-aa26-45ad-aebe-90dd6e77b16d.22fa7b3e2d91f2e1d0e75f0920a17bdf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      title: 'Video Games',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
