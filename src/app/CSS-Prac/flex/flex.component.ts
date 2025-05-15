import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuInnerComponent } from '../menu-inner/menu-inner.component';

@Component({
  selector: 'app-flex',
  imports: [CommonModule],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.css'
})
export class FlexComponent {
  isChildren!:boolean;
  menu:any = [
    {
      id: 1,
      name: 'Dashboard',
      children: []
    },
    {
      id: 2,
      name: 'Reports',
      children: [
        {
          id: 3,
          name: 'Sales',
          children: []
        },
        {
          id: 4,
          name: 'Expenses',
          children: [
            {
              id: 5,
              name: 'Daily',
              children: []
            }
          ]
        }
      ]
    }
  ];
}
