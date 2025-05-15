import { Directive, ElementRef ,HostBinding,HostListener,Input,Renderer2} from "@angular/core";

@Directive({
    selector:'[Hovercolor]'
})

export class HoverColorDirecctive{

    // @Input('Hovercolor') Hovercolor = "blue";
    // @HostBinding('style.background-color') get setHovercolor(){
    //     return this.Hovercolor;
        // }
    constructor(private el:ElementRef, private render:Renderer2){
        this.el.nativeElement.style.backgroundColor = 'lightgreen'
    }

    @HostListener('mouseenter') onmounseenter(){
        this.render.setStyle(this.el.nativeElement,'background-color','lightpink')
    }
} 


