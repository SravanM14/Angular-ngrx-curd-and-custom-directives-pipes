import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[apphighliteBackgroud]'
})


export class appHighliteDirective{
    @HostBinding('style.backgroundColor') background:string;
   constructor(private ele:ElementRef,private render:Renderer2){
    this.background = 'lightyellow'
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.ele.nativeElement,'backgroundColor','lightblue')
    this.render.setStyle(this.ele.nativeElement,'cursor','pointer')
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.ele.nativeElement,'backgroundColor','yellow')
    this.render.setStyle(this.ele.nativeElement,'cursor','pointer')
   }
   
}