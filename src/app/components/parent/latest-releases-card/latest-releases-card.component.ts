import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-releases-card',
  templateUrl: './latest-releases-card.component.html',
  styleUrls: ['./latest-releases-card.component.scss']
})
export class LatestReleasesCardComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit(): void {
  }

}
