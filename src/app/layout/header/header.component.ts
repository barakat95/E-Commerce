import { Component, OnInit } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private drawerService: NzDrawerService) { }

  ngOnInit(): void {
  }

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

}
