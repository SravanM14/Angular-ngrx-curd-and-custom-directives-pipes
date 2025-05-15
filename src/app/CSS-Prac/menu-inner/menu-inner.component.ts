import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inner',
  imports: [CommonModule],
  templateUrl: './menu-inner.component.html',
  styleUrl: './menu-inner.component.css'
})
export class MenuInnerComponent implements OnInit{

@Input() subList:any;

ngOnInit(): void {
  console.log(this.subList)
}
}
