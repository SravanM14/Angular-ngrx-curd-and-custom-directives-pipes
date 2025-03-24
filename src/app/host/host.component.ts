import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-host',
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css',
  animations:[
    trigger('toggleState',
    [state('open',style({
      backgroundColor: 'yellow',
      transform: 'translateX(0)'
    })),
    state('close', style({
      backgroundColor:'red',
      transform:'translateX(100%)'
    })),
    transition('open <=> close',[
      animate('0.5s ease-out-in')
    ])
    ])]
    
})
export class HostComponent implements OnInit,AfterViewInit{
  @ViewChild('container', { read: ViewContainerRef })container!: ViewContainerRef;
  isOpen:boolean = false;

 ngOnInit(): void {

 }
 ngAfterViewInit(){
  this.container.clear();
  this.container.createComponent(DynamicComponent)
 }
 toggle(){
  this.isOpen = !this.isOpen;
 }
}
