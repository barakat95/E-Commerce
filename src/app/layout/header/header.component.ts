import { Component, OnInit } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { SharedService } from './../../services/shared.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private drawerService: NzDrawerService, private sharedService: SharedService, public translateService: TranslateService) {
    translateService.addLangs(['en', 'ar']);
    translateService.setDefaultLang('en');
    this.sharedService.language = localStorage.getItem('language') || 'en';
  }

  ngOnInit(): void { }

  openDrawer(): void {
    const drawerRef = this.drawerService.create<DrawerComponent, { value: string }, string>({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: '',
      nzPlacement: 'left',
      nzContent: DrawerComponent,
      nzContentParams: {
        value: 'component'
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        console.log(data);
      }
    });
  }

  inputValue?: string;
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }

  changeLanguage(): void {
    if (localStorage.getItem('language') === 'ar') {
      this.translateService.use('en');
      localStorage.setItem('language', 'en');
    } else {
      this.translateService.use('ar');
      localStorage.setItem('language', 'ar');
    }
  }
}

