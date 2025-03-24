import { ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrl:'./register.component.css',
    imports: [LoginComponent,CommonModule],
   // changeDetection:ChangeDetectionStrategy.OnPush

})



export class RegisterComponent implements OnInit{
    @ViewChild( LoginComponent) login!:LoginComponent;
    @ViewChildren (LoginComponent) listofLogins!:QueryList<LoginComponent>
    data:any;
    numbers:any=[];
    isVisible:boolean= false;
    constructor(){}
    ngOnInit(){
        console.log(this.login)
    }

    sendData(){
        this.data = {
            userName:"Sravan@gnail.com",
            password:"#sra1"
        }
    }

    datafromchild(event:any){
        console.log(event, "form child")
    }

    Register(){
        return "Register"
    }

    accessChild(){
        this.isVisible= true;
        console.log(this.login)
    }
    
    accessAllChildren() {
        this.listofLogins.forEach(child => {
          console.log(child);  // Access each child component
        });
      }
}