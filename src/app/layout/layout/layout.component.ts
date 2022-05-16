import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { DrawerComponent } from './../drawer/drawer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private drawerService: NzDrawerService) { }

  ngOnInit(): void { }

  openComponent(): void {
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
