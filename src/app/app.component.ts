import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  constructor(private translateService: TranslateService, private sharedService: SharedService) {
    this.sharedService.language = localStorage.getItem('language') || 'en';
    translateService.setDefaultLang(this.sharedService.language);
  }
}

