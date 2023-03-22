import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: '',
              icon: 'pi pi-wifi',
              items: [
                  {label: 'New'},
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
      ];
  }
}
