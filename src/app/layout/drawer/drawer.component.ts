import { Component, Input, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(private drawerRef: NzDrawerRef<string>) { }

  close(): void {
    this.drawerRef.close(`close drawer`);
  }

  ngOnInit(): void { }

}
