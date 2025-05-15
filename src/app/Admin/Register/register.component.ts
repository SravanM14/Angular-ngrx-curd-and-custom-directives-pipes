import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, OnInit, QueryList, signal, ViewChild, ViewChildren, ViewEncapsulation } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../services/product.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrl:'./register.component.css',
    imports: [LoginComponent,CommonModule, FormsModule],
})



export class RegisterComponent implements OnInit, AfterViewInit{
    @ViewChild( LoginComponent) login!:LoginComponent;
    userName!:string;
    count = signal(0);//writable signal
    colors = signal(["red","green"])//writable signal
    a = signal(10);
    b=signal(20);
    c= computed(()=> this.a() + this.b())
    length = signal(10);
    width = signal(10);

    area = computed(()=> this.length()* this.width())
    constructor( private serv:ProductService){
        effect(()=>{
            this.colors.set(["pink"]);
            console.log("effect due to colors signal", this.colors())
        })
        effect(()=>{
            console.log("effect due to count signal", this.count())
        })
    }
    ngAfterViewInit(): void {
         //this.login.loginC();
    }
    ngOnInit(){
        console.log(this.c());
        this.a.set(20)
        
    }

//writable signal
    increment(){

         this.colors.update(v=> [...v, "blue"]);
        this.serv.changeCount(10);
    }

    changeHeight(e:any){
     this.length.set(e);
     console.log(e,"from child")
    }
}